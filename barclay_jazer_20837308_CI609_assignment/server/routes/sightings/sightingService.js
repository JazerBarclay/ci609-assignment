const db = require('../../database/dbConnection');


module.exports = {

    selectAllSightings: async (callBack) => {
        try {
            let rows = await db.query(
                'SELECT * FROM sightings;',
                []);
            if (rows) return callBack(null, rows);
            return callBack({ error: 'failed to query database' });
        } catch (error) {
            return callBack({ error: 'failed to query database' });
        }
    },

};