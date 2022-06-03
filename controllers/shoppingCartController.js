const {db} = require('../db');

const createUserCart = async (req, res, next) => {
    console.log(req.body);
    try {
        const cartCreated = await db.query('INSERT INTO cart(client_id) VALUES ($1) RETURNING *' , [
            req.body.username,
        ])
        console.log(res.json(cartCreated.rows));
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUserCart
}