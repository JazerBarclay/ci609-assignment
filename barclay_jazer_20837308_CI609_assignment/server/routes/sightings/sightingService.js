// Import database connection
const db = require('../../database/dbConnection');

module.exports = {

    // Get all sightings from database
    selectAllSightings: async (callBack) => {
        try {

            // Query database for all sightings
            let rows = await db.query(
                'SELECT * FROM sightings;',
                []);

            // If records found, return data
            if (rows) return callBack(null, rows);

            // If no records found return fail
            return callBack({ error: 'failed to query database' });

        } catch (error) {

            // On database query failure, return failed
            return callBack({ error: 'failed to query database' });
            
        }
    },

};