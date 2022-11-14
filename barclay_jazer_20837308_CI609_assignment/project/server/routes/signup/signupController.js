// Import bcrypt for hash functions
const bcrypt = require('bcrypt');

// Import user services
const { searchEmail, insertUser } = require('../users/userService');

// Checks if email matches regex pattern ( * @ * [repeat (.*) 2-4 times] )
function validateEmailRegex(elementValue){

    // Set email pattern to regex
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;

    // Return result of pattern text with given param
    return emailPattern.test(elementValue);
    
}

module.exports = {

    // Validate user input via post request
    validateParams: (req, res, next) => {

        // If any field is missing or blank return 400 error
        if (!req.body.name || !req.body.email || !req.body.password)
            return res.status(400).json({ error: 'missing params' });
        
        // Check email conforms to regex
        if (!validateEmailRegex(req.body.email)) 
            return res.status(400).json({ error: 'malformed email' });

        // else call next
        return next();

    },

    // Verify email address doesn't already exist in database
    validateEmail: (req, res, next) => {

        // Search database for count of records with given email
        searchEmail(req.body.email, (err, response) => {

            // If query failed, return error
            if (err) return res.status(500).json({err});

            // If record count > 0 return conflict as email already exists
            if (response[0].results > 0) return res.status(409).json({ error: 'email exists' });

            // On success go to next
            else return next();

        });

    },

    // Add user with given details
    addUser: (req, res) => {

        // Hash given password
        bcrypt.hash(req.body.password, 5, function(err, hash) {

            // If hash failed, return error
            if (err) return res.status(500).json({ err });

            // Insert new user with given details and hashed password
            insertUser(req.body.name, req.body.email, hash, (err, response) => {

                // If query failed, return error
                if (err) return res.status(500).json({err});

                // On success, return 201 accepted
                return res.status(201).end();

            });

        });

    },

}