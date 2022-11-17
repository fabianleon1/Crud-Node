const { json } = require('express');
const express = require('express');
const app = express();
const session=require('express-session');
const cookieParser=require('cookie-parser');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use(cookieParser('mi ultra secreto'));


app.use(session({

    secret: 'mi ultra secreto',
    resave:true,
    saveUninitialized:true
}));

app.unsubscribe(passport.initialize());
app.use(passport.session());



app.use('/', require('./router'));

app.listen(5000, () => {
    console.log('Server corriendo en http://localhost:5000');


});



const conexion=require('./views/database/db');
