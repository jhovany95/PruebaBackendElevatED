const {Pool} = require('pg');

const pool = new Pool ({
    host:'localhost',
    database:'libreria',
    user:'postgres', 
    password:'12345', 
    port:'5432', 
    max:'10'
    });


module.exports = {

    async getAll(){
        const client = await pool.connect();

        let Sql = 'select * from libros';

        let done = await client.query(Sql);

        return done.rows;

    },

    async LibroById(id){


        const client = await pool.connect();

        
        let Sql = 'select * from libros where id = $1' ;

        let done = await client.query(Sql,[id]);

        return done.rows;

    },

 
    async CreateLibro(object){

        const {titulo, autor,precio,cantidad} = object;

        const client = await pool.connect();

        
        let Sql = 'INSERT INTO libros (titulo, autor, precio,cantidad ) VALUES ($1,$2,$3,$4) returning *';

        let done = await client.query(Sql, [titulo,autor,parseInt(precio),cantidad]);

        

        return "libro creado";

    }




}