const {Pool} = require('pg');
const {dbConfig} = require('./config');

const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgresql://${process.env.USER}:
${process.env.PASSWORD}@${process.env.HOST}:
${process.env.PORT}/${process.env.DATABASE}`;

const db = new Pool ({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: {
        rejectUnauthorized: false,
    }, 
});

module.exports = {db};

