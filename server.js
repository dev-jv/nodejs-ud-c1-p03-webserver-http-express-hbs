// ---------------------------- <> la versión con express
const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// // Helpers
// hbs.registerHelper('getYear', () => {
//     return new Date().getFullYear();
// });
//
// hbs.registerHelper('capitalizar', (txt) => {
//    let wrds = txt.split(' ');
//    wrds.forEach((ter, idx) => {
//        wrds[idx] = ter.charAt(0).toUpperCase() + ter.slice(1).toLowerCase();
//    });
//    return wrds.join(' ');
// });

app.get('/', (req, res) => {
   res.render('home', {
       name: 'Pure evil',
    });
});

app.get('/about', (req, res) => {
   res.render('about');
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

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
