// ---------------------------- <> la versión con express
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

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
    console.log('Escuchandopeticiones en el puerto 3000')
});
