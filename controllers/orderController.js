const {db} = require('../db');

const createOrder = async (req, res, next) => {
    console.log(req.body);
    try {
        const orderCreated = await db.query('INSERT INTO orders(total_amount, client_id, cart_id, address_id) VALUES ($1,$2,$3,$4) RETURNING *' , [
            req.body.total_amount,
            req.body.username,
            req.body.cart_id,
            req.body.address_id,
        ])
        //console.log(res.json(cartCreated.rows));
        console.log(res.json(orderCreated.rows[0]));
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createOrder
}