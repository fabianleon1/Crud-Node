const express = require('express');
const router = express.Router();


const conexion = require('./views/database/db');




// MOSTAR REGISTROS

router.get('/', (req, res) => {
    res.render('login');


})

/* router.get('/', (req, res) => {


    conexion.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { results: results });
        }
    })

}) */

//LOGIN

router.get('/login', (req, res) => {
    res.render('login');
})
// ruta para registros

router.get('/create', (req, res) => {
    res.render('create');
})


// USUARIOS 
const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

//'/edit/:id'
//Ruta para editar usuarios
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('edit', { user: results[0] });
        }
    })
});

// RUTA PARA ELIMINAR REGISTROS

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE from users WHERE id=?', [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect('/');
        }
    })
})

module.exports = router;