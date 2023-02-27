
const Libros = require('../models/LibroModel');


const GetLibros = async(req,res) => {

    return res.json(await Libros.getAll());

}

const GetLibroById = async(req,res) => {

    const id = req.params.id;
    return res.json(await Libros.LibroById(id));

}

const CreatLibro = async(req,res) => {

    console.log(req.body);
    return res.json(await Libros.CreateLibro(req.body));


}

module.exports={
    GetLibros,
    GetLibroById,
    CreatLibro
}