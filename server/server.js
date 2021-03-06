//Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
//Importamos la conexion a la db
const { connect } = require("./utils/database/connect");

// Express APIs
const user = require('./api/routes/user.routes');
const episodio = require ('./api/routes/episodio.routes');
const planeta = require ('./api/routes/planeta.routes')

//Ejecutamos la funcion que conecta con la db
connect();

// Configuración de express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

// Aquí indicamos las rutas a usar
app.use('/public', express.static('public'));

app.use('/api', user)
app.use('/api', episodio)
app.use('/api', planeta)

// Definimos el puerto desde el dotenv y si no lo hubiera el 4000
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Manejamos los errores
app.use((req, res, next) => {
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});