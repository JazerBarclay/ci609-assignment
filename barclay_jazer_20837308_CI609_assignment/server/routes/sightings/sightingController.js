const { selectAllSightings } = require('./sightingService');

module.exports = {

    getAllSightings: (req, res) => {
        selectAllSightings((err, data) => {
            if (err) return res.status(200).json({ err });
            return res.status(200).json({ data });
        });
    },

    getSightingsByUser: (req, res) => {
        return res.status(200).json({ data: 'none' });
    },

    addNewSighting: (req, res) => {
        return res.status(200).json({ data: 'none' });
    },
    
};