const { Router } = require('express');
const { LoginClient, addClient
        } = require('../controllers/clientsController')

const router = new Router();

router.post('/login', LoginClient)
router.post('/newClient', addClient)

module.exports = router;