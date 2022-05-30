const {db} = require('../db');

const createUserCart = async (req, res, next) => {
    try {
        const cartCreated = await db.query('INSERT INTO cart(user_id) VALUES ($1)' , [
            req.params.userId,
        ])
        res.json(cartCreated.rows);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUserCart
}