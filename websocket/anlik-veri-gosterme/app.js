const app = require('express')();
const http = require('http').Server(app).listen(3000);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('Kullanıcı Bağlandı');

    socket.on('s-gonder', (data) =>{
        socket.broadcast.emit('ekle',{ name:data.gonder });
    });
    socket.on('disconnect',()=>{
        console.log('Kullanıcı Ayrıldı');
    });
});
