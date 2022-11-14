const bcrypt = require('bcrypt');

const { searchEmail, insertUser } = require('../users/userService');

// Checks if email matches regex pattern ( * @ * [repeat (.*) 2-4 times] )
function validateEmailRegex(elementValue){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
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

    validateEmail: (req, res, next) => {
        searchEmail(req.body.email, (err, response) => {
            if (err) return res.status(500).json({err});
            if (response[0].results > 0) return res.status(409).json({ error: 'email exists' });
            else return next();
        });
    },

    addUser: (req, res) => {
        bcrypt.hash(req.body.password, 5, function(err, hash) {
            if (err) return res.status(500).json({ err })
            insertUser(req.body.name, req.body.email, hash, (err, response) => {
                if (err) return res.status(500).json({err});
                return res.status(201).end();
            });
        });
    },

}