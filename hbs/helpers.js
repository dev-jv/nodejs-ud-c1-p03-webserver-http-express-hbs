const hbs = require('hbs');

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (txt) => {
    let wrds = txt.split(' ');
    wrds.forEach((ter, idx) => {
        wrds[idx] = ter.charAt(0).toUpperCase() + ter.slice(1).toLowerCase();
    });
    return wrds.join(' ');
});
