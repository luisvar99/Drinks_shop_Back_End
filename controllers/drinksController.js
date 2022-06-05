const {db} = require('../db');

const getAllDrinks = async (req, res, next) => {
    try {
        const allDrinks = await db.query('SELECT * FROM drinks')
        res.json(allDrinks.rows);
    } catch (error) {
        next(error.message)
    }
}

const getDrinksByCategory = async (req, res, next) => {
    try {
        const allDrinksByCategory = await db.query('SELECT * FROM drinks WHERE category = $1 ' , 
            [req.params.name])
            
        res.json(allDrinksByCategory.rows);
    } catch (error) {
        next(error)
    }
}
const getDrinksByName = async (req, res, next) => {
    try {
        const allDrinksByName = await db.query('SELECT * FROM drinks WHERE name LIKE $1 ' , 
            [`%${req.params.name}%`])
            
        res.json(allDrinksByName.rows);
    } catch (error) {
        next(error)
    }
}

const getOneDrink = async(req, res, next) => {
    try {
        const oneDrink = await db.query('SELECT * FROM drinks WHERE product_id = $1' , [req.params.id]);
        res.json(oneDrink.rows);
    } catch (error) {
        next(error)
    }
}

const addDrink = async (req, res, error) => {
    const drink = req.body
    const name = drink.name
    const description = drink.description
    const price = drink.price
    
    try {
        const result = await db.query('INSERT INTO drinks (name, description,price) VALUES ($1,$2,$3) RETURNING *', [
            name, description, price
        ]);
        res.json(result.rows[0]);

    } catch (error) {
        alert("Error") //en caso de haber error, se va a la ruta de index.js para manejar errores
    }
    
}

const deleteDrink = async (req, res, next) => {
    try {
        const drinkToDelete = await db.query('DELETE FROM drinks WHERE id = $1 RETURNING *' , [req.params.id]);
        res.json(drinkToDelete.rows);
    } catch (error) {
        next(error)
    }
}

const editDrink = async (req, res, next) => {
    const drink = req.body
    const name = drink.name
    const description = drink.description
    const category = drink.category
    try {
        const drinkToUpdate = await db.query('UPDATE drinks SET name = $1, description = $2, category = $3 WHERE id = $4 RETURNING *' , [
            name, 
            description,
            category,
            req.params.id
        ]);
        res.json(drinkToUpdate.rows);
    } catch (error) {
        next(error)
    }
}

const addToCart = async (req, res, error) => {
    const drink = req.body
    const id = drink.product_id
    const quantity = drink.quantity
    const cart_id = drink.cart_id
    
    try {
        console.log(req.body);
        const result = await db.query('INSERT INTO cart_items (product_id, quantity,cart_id) VALUES ($1,$2,$3) RETURNING *', [
            id, quantity, cart_id
        ]);
        res.json(result.rows)
    } catch (error) {
        res.json({error: "Error"}) //en caso de haber error, se va a la ruta de index.js para manejar errores
    }
    
}

module.exports = {
    getAllDrinks,
    getOneDrink,
    getDrinksByCategory,
    addDrink,
    deleteDrink,
    editDrink, 
    getDrinksByName,
    addToCart
}