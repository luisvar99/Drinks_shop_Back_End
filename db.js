const {Pool} = require('pg');
const {dbConfig} = require('./config');

const db = new Pool ({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
    
/*     ssl: {
        rejectUnauthorized: false,
    },  */}
);

module.exports = {db};

