const {Pool} = require('pg');
const {dbConfig} = require('./config');

const isProduction = process.env.NODE_ENV === "production";

const db = new Pool ({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    }, 
});

module.exports = {db};

