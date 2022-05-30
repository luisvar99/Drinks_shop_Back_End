const { Router } = require('express');
const { getAllCategories,
        } = require('../controllers/categoryController')

const router = new Router();

router.get('/categories', getAllCategories)

module.exports = router;