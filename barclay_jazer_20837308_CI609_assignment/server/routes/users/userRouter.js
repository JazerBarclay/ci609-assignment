// Import modules from auth and controller
const { validateToken } = require('../../auth/tokenValidation');
const { addNewUser, getAllUsers, getUserByID, getUserByEmail, updateUserByID } = require('./userController');

// Add router from express to manage routing
const router = require('express').Router();

// Handle get all users request
router.get('/', validateToken, getAllUsers);

// Handle get user by id request
router.get('/id/:id', validateToken, getUserByID);

// Handle get user by email request
router.get('/email/:email', validateToken, getUserByEmail);

// Handle put to insert new user request
router.put('/', validateToken, addNewUser);

// Handle patch to update user by id request
router.patch('/', validateToken, updateUserByID);

// Handle delete user by id request
router.delete('/', validateToken, updateUserByID);

// Export this router module
module.exports = router;