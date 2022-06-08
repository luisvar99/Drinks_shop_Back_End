const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const drinksRoutes = require('./routes/drinks.routes');
const categoriesRoutes = require('./routes/category.routes');
const clientsRoutes = require('./routes/clients.routes')
const cartRoutes = require('./routes/cart.routes')
const orderRoutes = require('./routes/order.routes')

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(drinksRoutes);
app.use(categoriesRoutes);
app.use(clientsRoutes);
app.use(cartRoutes);
app.use(orderRoutes);

app.get('/', (req, res) => {
        res.send("Hello")
    })

app.use((err, req, res, next) => { 
    return res.json({
        message: "Error!!!",
    })
})

//const PORT = process.env.PORT || 4000
const PORT = 4000

app.listen(PORT , ()=> {
    console.log(`Server on Port ${PORT}`);
});
