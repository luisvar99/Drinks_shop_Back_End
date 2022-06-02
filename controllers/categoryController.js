const {db} = require('../db');


const getAllCategories = async (req, res, next) => {
    try {
        //res.json({Query: "After Query"})
        //db.connect();
        const allCategories = await db.query("SELECT * FROM categories")
        res.json(allCategories.rows);
    } catch (error) {
        res.json({error});
        //next(error)
    }
}

module.exports = {
    getAllCategories
}