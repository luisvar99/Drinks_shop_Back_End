const {db} = require('../db');

const getAllCategories = async (req, res, next) => {
    try {
        const allCategories = await db.query('SELECT * FROM categories')
        return res.json(allCategories.rows);
    } catch (error) {
        console.log(error);
        next(error)
    }
}


module.exports = {
    getAllCategories
}