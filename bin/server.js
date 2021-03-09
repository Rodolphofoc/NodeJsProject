const app = require('../src/app');
const debug = require('debug')('halls:server');
const http = require('http');
const port = normalizaPort(process.env.PORT || '3000');
app.set('port', port);

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})