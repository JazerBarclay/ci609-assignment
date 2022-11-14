// Import modules from service
const { selectAllUsers, selectUserByID, selectUserByEmail } = require('./userService');

module.exports = {

    // Get all users
    getAllUsers: (req, res) => {

        // Select all users from database
        selectAllUsers((err, response) => {

            // If query failed, return error
            if (err) return res.status(500).json({ err });

            // On success, return data
            else return res.status(200).json({ users: response });

        });

    },

    // Get user by given ID
    getUserByID: (req, res) => {

        // Select all users with a given ID
        selectUserByID(req.params.id, (err, response) => {

            // On query failure, return error
            if (err) return res.status(500).json({ err });

            // If no records found, return not found
            if (response.length < 1) return res.status(404).json({ error: "no data found" });

            // On record found, return user data
            return res.status(200).json({ user: response[0] });

        });

    },

    // Get user by given email
    getUserByEmail: (req, res) => {

        // Select all users with a given email
        selectUserByEmail(req.params.email, (err, response) => {

            // On query failure, return error
            if (err) return res.status(500).json({ err });

            // If no records found, return not found
            if (response.length < 1) return res.status(404).json({ error: "no data found" });

            // On record found, return user data
            return res.status(200).json({ user: response[0] });

        });

    },

    // Add new user
    addNewUser: (req, res) => {
        // Unimplemented
        return res.status(501);
    },

    // Update user with given ID
    updateUserByID: (req, res) => {
        // Unimplemented
        return res.status(501);
    },

    // Remove user with given ID
    removeUserByID: (req, res) => {
        // Unimplemented
        return res.status(501);
    },

};
