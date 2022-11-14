// Import modules from service
const { selectAllUsers, selectUserByID, selectUserByEmail } = require('./userService');

module.exports = {

    getAllUsers: (req, res) => {
        selectAllUsers((err, response) => {
            if (err) return res.status(500).json({ err });
            else return res.status(200).json({ users: response });
        });
    },

    getUserByID: (req, res) => {
        selectUserByID(req.params.id, (err, response) => {
            if (err) return res.status(500).json({ err });
            if (response.length < 1) return res.status(404).json({ error: "no data found" });
            return res.status(200).json({ user: response[0] });
        });
    },

    getUserByEmail: (req, res) => {
        selectUserByEmail(req.params.email, (err, response) => {
            if (err) return res.status(500).json({ err });
            if (response.length < 1) return res.status(404).json({ error: "no data found" });
            return res.status(200).json({ user: response[0] });
        });
    },

    addNewUser: (req, res) => {
        // Unimplemented
        return res.status(501);
    },

    updateUserByID: (req, res) => {
        // Unimplemented
        return res.status(501);
    },

    removeUserByID: (req, res) => {
        // Unimplemented
        return res.status(501);
    },

};
