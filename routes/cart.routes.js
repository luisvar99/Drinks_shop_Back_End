const { Router } = require('express');
const { createUserCart, getUserCartDetails,
        } = require('../controllers/shoppingCartController')

const router = new Router();

router.post('/createUserCart', createUserCart)
router.get('/getUserCart/:username', getUserCartDetails)

module.exports = router;