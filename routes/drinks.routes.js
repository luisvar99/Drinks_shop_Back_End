const { Router } = require('express');
const { getAllDrinks, 
        getOneDrink,
        getDrinksByCategory,
        getDrinksByName, 
        addDrink, 
        deleteDrink, 
        editDrink, 
        addToCart} = require('../controllers/drinksController')

const router = new Router();

router.get('/drinks', getAllDrinks)
router.get('/drinks/:id', getOneDrink);
router.get('/drinksByCategory/:name', getDrinksByCategory);
router.get('/drinksByName/:name', getDrinksByName);
router.post('/drinks', addDrink);
router.post('/addToCart', addToCart);
router.delete('/drinks/:id', deleteDrink)
router.put('/drinks/:id', editDrink)


module.exports = router;