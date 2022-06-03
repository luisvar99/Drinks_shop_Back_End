const {db} = require('../db');


const addClient = async (req, res, error) => {
    console.log(req.body);
    const client = req.body
    const username = client.username
    const password = client.password
    const name = client.name
    const last_name = client.last_name
    
    
    try {
        const result = await db.query('INSERT INTO clients (username,password, name, last_name) VALUES ($1,$2,$3,$4) RETURNING *', [
            username, password, name, last_name
        ]);
        if(username===result.rows[0].username){
            throw new Error('Invalid username');
        }else{
            res.json(result.rows[0]);
        }

    } catch (error) {
        res.send({error:"Error"}) //en caso de haber error, se va a la ruta de index.js para manejar errores
    }
    
}

const LoginClient = async (req, res, error) => {
    const client = req.body
    const username = client.username
    const password = client.password
    
    try {
        const result = await db.query('SELECT * from clients WHERE username =$1 AND password= $2  ', [
            username, password
        ]);

        console.log('result-> ' , req.body);
        console.log('result-> ' , (result.rows.length));

        if(result.rows.length==0){
            //res.send({error:"Invalid credentials"});
            res.json(result.rows)
        }else{
            res.json(result.rows);
            
        }
    } catch (error) {
        
        res.send({error:error.message}) //en caso de haber error, se va a la ruta de index.js para manejar errores
    }
    
}

const getClients = async (req, res, next) => {
    try {
        const allClients = await db.query("SELECT * FROM clients")
        res.json(allClients.rows);
    } catch (error) {
        res.json({error});
        //next(error)
    }
}


module.exports = {
    addClient,
    LoginClient, 
    getClients
}