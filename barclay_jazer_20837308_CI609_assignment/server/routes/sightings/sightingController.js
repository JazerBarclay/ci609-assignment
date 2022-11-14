// Import sighting services 
const { selectAllSightings } = require('./sightingService');

module.exports = {

    // Get all sightings from database
    getAllSightings: (req, res) => {

        // Search database for all sightings
        selectAllSightings((err, data) => {

            // On query failure, return error
            if (err) return res.status(500).json({ err });

            // On success return records
            return res.status(200).json({ data });

        });

    },

    // Get all sightings by a given user
    getSightingsByUserID: (req, res) => {

        // Return umimplemented
        return res.status(501).json({ status: 'unimplemented' });

    },

    // Add new sighting
    addNewSighting: (req, res) => {

        // Return umimplemented
        return res.status(501).json({ status: 'unimplemented' });
        
    },
    
};