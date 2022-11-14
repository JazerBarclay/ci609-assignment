// Import database connection
const db = require('../../database/dbConnection');

module.exports = {

    // Returns the number of emails which match param
    searchEmail: async (email, callBack) => {
        try {

            // Query database for total number of users with given email
            let rows = await db.query(
                'SELECT COUNT(id) as results FROM users WHERE email = ?;',
                [email]);

            // If records found, return data
            if (rows) return callBack(null, rows);
            
            // If no records found return fail
            return callBack({ error: 'failed to query database' });

        } catch (error) {

            // On database query failure, return failed
            return callBack({ error: 'failed to query database' });

        }
    },

    // Returns all users in the database
    selectAllUsers: async (callBack) => {
        try {

            // Query database for all users
            let rows = await db.query(
                'SELECT id, name, email FROM users;',
                []);
            
            // If records found, return data
            if (rows) return callBack(null, rows);

            // If no records found return fail
            else return callBack({ error: 'failed to query database' });

        } catch (error) {
            
            // On database query failure, return failed
            return callBack({ error });

        }
    },

    // Returns all users in the database with matching email
    selectUserByEmail: async (email, callBack) => {
        try {

            // Query database for all users with matching email
            let rows = await db.query(
                'SELECT * FROM users WHERE email = ?;',
                [email]);

            // If records found, return data
            if (rows) return callBack(null, rows);

            // If no records found return fail
            else return callBack({ error: 'failed to query database' });
        
        } catch (error) {
        
            // On database query failure, return failed
            return callBack({ error });
        
        }
    },

    // Returns user with the given ID
    selectUserByID: async (id, callBack) => {
        try {

            // Query database for user with matching ID
            let rows = await db.query(
                'SELECT * FROM users WHERE id = ?;',
                [id]);

            // If records found, return data
            if (rows) return callBack(null, rows);

            // If no records found return fail
            else return callBack({ error: 'failed to query database' });
        
        } catch (error) {
        
            // On database query failure, return failed
            return callBack({ error });
        
        }
    
    },

    // Returns success when new user inserted
    insertUser: async (name, email, password, callBack) => {
        try {

            // Insert new user with given details
            let rows = await db.query(
                'INSERT INTO users( name, email, password ) VALUES ( ?, ?, ? );',
                [name, email, password]);
                
            // If insert successful, return data
            if (rows) return callBack(null, rows);

            // If insert failed, return failed
            else return callBack({ error: 'failed to query database' });

        } catch (error) {

            // On database query failure, return failed
            return callBack({ error });
        
        }
   
    },

};