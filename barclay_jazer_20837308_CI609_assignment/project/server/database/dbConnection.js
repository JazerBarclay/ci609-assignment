// Import mysql
const mysql = require('mysql2/promise');

// Set credentials for database connection
const credentials = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'db'
};

// Async function to query database using sql template and params
async function query(sql, params) {

    // Connect to database
    const connection = await mysql.createConnection(credentials);

    // Run query
    const [results] = await connection.execute(sql, params);

    // Return result promise
    return results;
    
}

module.exports = { query };