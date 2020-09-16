const app = require('./app');
const config = require('../config.json')

app.listen(config.port, () => {
    console.log(`Servidor iniciado em: ${config.host}:${config.port}`);
    console.log('Para derrubar o servidor: ctrl + c');
})
