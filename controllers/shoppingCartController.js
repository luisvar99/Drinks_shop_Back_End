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

const getUserCart = async (req, res, next) => {

    try {
        const userCart = await db.query('SELECT * FROM cart WHERE client_id = ($1) AND order_id is null' , [
            req.params.username,
        ])
        res.json(userCart.rows[0].cart_id);
    } catch (error) {
        next(error)
    }
}

const getUserCartDetails = async (req, res, next) => {
    //console.log('Body: ' + req.params);
    try {
        const userCart = await db.query('select ci.product_id, quantity, d.name, price from cart_items ci INNER JOIN cart ca on ci.cart_id = ca.cart_id INNER JOIN drinks d on d.product_id = ci.product_id WHERE ca.order_id is null AND client_id=($1)' , [
            req.params.username,
        ])
        res.json(userCart.rows);
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createUserCart,
    getUserCart,
    getUserCartDetails
}