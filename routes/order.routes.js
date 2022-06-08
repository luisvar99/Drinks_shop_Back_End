const { Router } = require('express');
const { createOrder,
        } = require('../controllers/orderController')

const router = new Router();

router.post('/createOrder', createOrder)

module.exports = router;