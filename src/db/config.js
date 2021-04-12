// npm install sqlite3
// npm install sqlite

const sqlite3 = require('sqlite3');
// Pegando apenas a funcionalidade open do SQLite
const { open } = require('sqlite');

// Conexão com DB habilitada com arrow function
// como so tem um item dentro do arrow elimina as chaves {}
module.exports = () => open({
        filename: './database.sqlite',
        driver: sqlite3.Database
    });
