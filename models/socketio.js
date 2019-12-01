var io = require('socket.io')();

io.on('connection', function(socket) {
    socket.emit("hi", "socketio connected!");

    //接收并处理前端的 patientListUpdate 事件
    socket.on('patientListUpdate', function(data) {
        console.log('got data from pages:');
        console.log(data);
    });

    //断开事件
    socket.on('disconnect', function(data) {
        // console.log('断开',data);
        socket.emit('leave','离开');
        //socket.broadcast用于向整个网络广播(除自己之外)
        // socket.broadcast.emit('leave','某某人离开了')
    });

});

module.exports = io;