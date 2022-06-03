const { Router } = require('express');
const { LoginClient, addClient, getClients
        } = require('../controllers/clientsController')

const router = new Router();

router.post('/login', LoginClient)
router.post('/newClient', addClient)
router.get('/clients', getClients)


module.exports = router;