const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

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
        searchEmail(req.body.email, (err, response) => {
            if (err) return res.status(500).json({err});
            if (response[0].results == 0) return res.status(404).json({ error: 'email does not exist' });
            else return next();
        });
    },

    // Check if email and password match record in database
    verifyLogin: (req, res, next) => {
        selectUserByEmail(req.body.email, (err, response) => {
            if (err) return res.status(500).json({err});
            bcrypt.compare(req.body.password, response[0].password, function(ex, result) {
                if (ex) return res.status(500).json({ex});
                if (!result) return res.status(401).json({ status: 'incorrect email or password' });
                req.id = response[0].id;
                return next();
            });
        });
    },

    // Generate new json web token
    issueToken: (req, res) => {
        var token = jwt.sign(
            { id: req.id }, 
            process.env.JWT_KEY || 'secret', 
            { expiresIn: '24h' });
        return res.status(200).json({ token });
    },

};
