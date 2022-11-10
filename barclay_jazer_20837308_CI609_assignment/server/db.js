const mysql = require('mysql2/promise');

const credentials = {
    host: 'jb2139.brighton.domains',
    user: 'jb2139',
    password: '146SBl#O[mza5V',
    database: 'jb2139_ci609-api'
};

async function query(sql, params) {
    const connection = await mysql.createConnection(credentials);
    const [results, ] = await connection.execute(sql, params);
    return results;
}

module.exports = { query }