// Import database connection
const db = require('../../database/dbConnection');

module.exports = {

    searchEmail: async (email, callBack) => {
        try {
            let rows = await db.query(
                'SELECT COUNT(id) as results FROM users WHERE email = ?;',
                [email]);
            if (rows) return callBack(null, rows);
            return callBack({ error: 'failed to query database' });
        } catch (error) {
            return callBack({ error: 'failed to query database' });
        }
    },

    selectAllUsers: async (callBack) => {
        try {
            let rows = await db.query(
                'SELECT * FROM users;',
                []);
            if (rows) return callBack(null, rows);
            else return callBack({ error: 'failed to query database' });
        } catch (error) {
            return callBack({ error });
        }
    },

    selectUserByEmail: async (email, callBack) => {
        try {
            let rows = await db.query(
                'SELECT * FROM users WHERE email = ?;',
                [email]);
            if (rows) return callBack(null, rows);
            else return callBack({ error: 'failed to query database' });
        } catch (error) {
            return callBack({ error });
        }
    },

    selectUserByID: async (id, callBack) => {
        try {
            let rows = await db.query(
                'SELECT * FROM users WHERE id = ?;',
                [id]);
            if (rows) return callBack(null, rows);
            else return callBack({ error: 'failed to query database' });
        } catch (error) {
            return callBack({ error });
        }
    },

    insertUser: async (name, email, password, callBack) => {
        try {
            let rows = await db.query(
                'INSERT INTO users( name, email, password ) VALUES ( ?, ?, ? );',
                [name, email, password]);
            console.log(rows);
            if (rows) return callBack(null, rows);
            else return callBack({ error: 'failed to query database' });
        } catch (error) {
            return callBack({ error });
        }
    },

};