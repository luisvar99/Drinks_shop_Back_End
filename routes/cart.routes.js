const { Router } = require('express');
const { createUserCart,
        } = require('../controllers/ShoppingCartController')

const router = new Router();

router.get('/createUserCart', createUserCart)

module.exports = router;