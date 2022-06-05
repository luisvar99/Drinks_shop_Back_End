const { Router } = require('express');
const { LoginClient, 
        addClient, 
        getClients,
        checkUserName, 
        
        } = require('../controllers/clientsController');

const router = new Router();

router.post('/login', LoginClient)
router.post('/newClient', addClient)
router.get('/clients', getClients)
router.get('/checkUserName/:username', checkUserName)


module.exports = router;