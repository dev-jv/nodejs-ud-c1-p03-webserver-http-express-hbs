// ---------------------------- <> lo previo a express...
const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'fernando',
        edad:32,
        url: req.url
    };

    res.write(JSON.stringify(salida));
    // res.write('Although');
    res.end();
})
.listen(8070);

console.log('Escuchando el puerto 8070');
