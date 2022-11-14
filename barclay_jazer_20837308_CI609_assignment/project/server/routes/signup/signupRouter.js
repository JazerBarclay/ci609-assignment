// Import functions from controller
const { 
    validateParams, validateEmail, addUser 
} = require('./signupController');

// Add router from express to manage routing
const router = require('express').Router();

// Handle get request to root of /user
router.post('/', validateParams, validateEmail, addUser);

// Export this router module
module.exports = router;