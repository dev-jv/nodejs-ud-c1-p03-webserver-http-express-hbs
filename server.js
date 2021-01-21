// ---------------------------- <> la versión con express
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
   res.render('home', {
       name: 'Pure evil',
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
