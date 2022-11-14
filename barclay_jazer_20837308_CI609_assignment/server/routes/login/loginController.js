// Import bcrypt for hashing and jwt for auth token
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Import user services
const { searchEmail, selectUserByEmail } = require('../users/userService');

module.exports = {
    
    // Validate user input via post request
    validateParams: (req, res, next) => {

        // If any field is missing or blank return 400 error
        if (!req.body.email || !req.body.password)
            return res.status(400).json({ error: 'missing params' });

        // else call next
        return next();

    },

    // Verify record with given email exists in database
    verifyEmail: (req, res, next) => {

        // Search if email exists in database
        searchEmail(req.body.email, (err, response) => {

            // On error return err
            if (err) return res.status(500).json({err});

            // If no results then email doesn't exist in database
            if (response[0].results == 0) return res.status(404).json({ error: 'email does not exist' });

            // Email exists go to next
            else return next();

        });

    },

    // Check if email and password match record in database
    verifyLogin: (req, res, next) => {
        
        // Get all records which match email
        selectUserByEmail(req.body.email, (err, response) => {

            // On query fail, return error
            if (err) return res.status(500).json({err});

            // Compare hash of password with query password response
            bcrypt.compare(req.body.password, response[0].password, function(ex, result) {

                // On compare failure, return error
                if (ex) return res.status(500).json({ex});

                // On no match, return failed login
                if (!result) return res.status(401).json({ status: 'incorrect email or password' });

                // Set request id to user id from database
                req.id = response[0].id;

                // Go to next
                return next();

            });

        });

    },

    // Generate new json web token
    issueToken: (req, res) => {

        // Set token to jwt signed values
        var token = jwt.sign(
            { id: req.id }, 
            process.env.JWT_KEY || 'secret', 
            { expiresIn: '24h' });
        
        // Return token
        return res.status(200).json({ token });
        
    },

};
