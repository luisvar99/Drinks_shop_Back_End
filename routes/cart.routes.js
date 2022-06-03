const { Router } = require('express');
const { createUserCart,
        } = require('../controllers/shoppingCartController')

const router = new Router();

router.get('/createUserCart', createUserCart)

module.exports = router;