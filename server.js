// ---------------------------- <> la versión con express
const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
   res.render('home', {
       name: 'Pure evil',
       year: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
   res.render('about', {
       year: new Date().getFullYear()
   });
});

// app.get('/', (req, res) => {
//     // res.send('Although')
//     let salida = {
//         nombre: 'fernando',
//         edad:32,
//         url: req.url
//     };
//
//     res.send(salida);
//
// });

app.listen(5000, () => {
    console.log('Escuchando peticiones en el puerto 5000')
});
