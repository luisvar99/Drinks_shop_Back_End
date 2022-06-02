const {db} = require('../db');

const getAllCategories = async (req, res, next) => {
    try {
        res.json({getCategories: "Entrando a Get categories"})
        const allCategories = await db.query('SELECT * FROM categories')
        res.json({Query: "After Query"})
        return res.json(allCategories.rows);
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllCategories
}