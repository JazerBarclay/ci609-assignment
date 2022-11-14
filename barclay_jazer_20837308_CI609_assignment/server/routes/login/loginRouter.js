// Import functions from controller
const { 
    validateParams, verifyEmail, verifyLogin, issueToken 
} = require('../login/loginController');

// Add router from express to manage routing
const router = require('express').Router();

// Handle get request to root of /user
router.post('/', validateParams, verifyEmail, verifyLogin, issueToken);

// Export this router module
module.exports = router;