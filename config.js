const {config} = require('dotenv');
config();

module.exports = {
    dbConfig : {
        user: process.env.USER,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        port: process.env.PORT,
        database: process.env.DATABASE,
    }
}