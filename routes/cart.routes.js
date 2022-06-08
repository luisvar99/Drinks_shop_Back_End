const { Router } = require('express');
const { createUserCart, getUserCartDetails, 
        updateUserCart, getUserCartOrderId, 
        getUserCart, deleteCartItem
        } = require('../controllers/shoppingCartController')

const router = new Router();

router.post('/createUserCart', createUserCart)
router.get('/getUserCart/:username', getUserCartDetails)
router.get('/getUserCartId/:username', getUserCart)
router.get('/getUserCartOrderId/:username', getUserCartOrderId)
router.put('/updateUserCart', updateUserCart)
router.delete('/deleteCartItem/:product_id/:cart_id', deleteCartItem)

module.exports = router;