const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const drinksRoutes = require('./routes/drinks.routes');
const categoriesRoutes = require('./routes/category.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(drinksRoutes);
app.use(categoriesRoutes);

app.use((err, req, res, next) => { //funcion para manejar errores
    return res.json({
        message: "Error!"
    })
})

const PORT = process.env.PORT || 4000

app.listen(PORT , ()=> {
    console.log(`Server on Port ${PORT}`);
});
