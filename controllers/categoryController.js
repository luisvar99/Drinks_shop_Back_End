const {db} = require('../db');

const getAllCategories = async (req, res, next) => {
    try {
        //res.json({Query: "After Query"})
        const allCategories = await db.query('SELECT * FROM categories')
        res.json({getCategories: "Entrando a Get categories"})
        res.json(allCategories.rows);
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllCategories
}