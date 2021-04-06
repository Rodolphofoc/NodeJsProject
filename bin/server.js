const app = require('../src/app');
const debug = require('debug')('halls:server');
const http = require('http');
const port = normalizaPort(process.env.PORT || '3000');
const io = require('socket.io')(http);


app.set('port', port);

io.on('connection', socket => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('message', message => {
        console.log('message: ' + message);
        //Broadcast the message to everyone
        io.emit('message', message);
    });
});

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

