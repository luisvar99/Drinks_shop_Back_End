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
    console.log("Params: " + JSON.stringify(req.params));
    try {
        const userCart = await db.query('SELECT * FROM cart WHERE client_id = ($1) AND order_id is null' , [
            req.params.username,
        ])
        res.json(userCart.rows[0].cart_id);
        console.log("Carrito Encontrado: " + userCart.rows);
    } catch (error) {
        next(error)
    }
}

const getUserCartDetails = async (req, res, next) => {
    //console.log('Body: ' + req.params);
    try {
        const userCart = await db.query('select ci.product_id, quantity, d.name, price, ca.cart_id from cart_items ci INNER JOIN cart ca on ci.cart_id = ca.cart_id INNER JOIN drinks d on d.product_id = ci.product_id WHERE ca.order_id is null AND client_id=($1)' , [
            req.params.username,
        ])
        res.json(userCart.rows);
    } catch (error) {
        next(error)
    }
}

const updateUserCart = async (req, res, next) => {
    console.log(req.body);
    const order = req.body
    const order_id = order.order_id
    const client_id = order.client_id

    try {
        const drinkToUpdate = await db.query('UPDATE cart SET order_id = $1 WHERE client_id = $2 AND order_id is null RETURNING *' , [
            order_id, 
            client_id
        ]);
        res.json(drinkToUpdate.rows);
    } catch (error) {
        next(error)
    }
}


const getUserCartOrderId = async (req, res, next) => {
    console.log('Body: ' + JSON.stringify(req.params));
    try {
        const order_id = await db.query('select MAX(order_id) as id from orders where client_id = ($1)', [
            req.params.username,
        ])
        res.json(order_id.rows);
    } catch (error) {
        next(error)
    }
}

const deleteCartItem = async (req, res, next) => {
    try {
        const drinkToDelete = await db.query('DELETE FROM cart_items WHERE product_id = $1 AND cart_id = $2 RETURNING *' , [
            req.params.product_id, req.params.cart_id
        ]);
        res.json(drinkToDelete.rows);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUserCart,
    getUserCart,
    getUserCartDetails,
    updateUserCart,
    getUserCartOrderId, 
    deleteCartItem
}