const express = require('express');


const app = express();

const Libros = require('../controllers/LibroController');

app.get('/libros', Libros.GetLibros);
app.get('/libros/:id', Libros.GetLibroById);

app.post('/libros/create', Libros.CreatLibro);

module.exports=app;