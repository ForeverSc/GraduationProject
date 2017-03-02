const socketio = require('socket.io');

const socket = {
    getSocket(server){
        let io =  socketio.listen(server);
        io.sockets.on('connection', function (socket) {
            console.log('connection success')
            socket.on('confirmOrder', function (shopName) {
                socket.emit('orderConfirmed', shopName)
            });

            socket.on('order', function (username) {
                socket.emit('newOrder', username)
            });

        })
    }
};

module.exports = socket;