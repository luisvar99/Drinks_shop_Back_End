const {db} = require('../db');

const getAllCategories = async (req, res, next) => {
    try {
        res.json({getCategories: "Get categories"})
        const allCategories = await db.query('SELECT * FROM categories')
        return res.json(allCategories.rows);
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllCategories
}