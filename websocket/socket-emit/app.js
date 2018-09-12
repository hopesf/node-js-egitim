const app = require('express')();
const http = require('http').Server(app).listen(3000);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('Kullanıcı Bağlandı');

    socket.on('hola',(data) =>{
       console.log(data.name,data.sehir);
    });
    socket.emit('puta',{ yaz:'ölürüm türkiyem' });
    socket.on('disconnect',()=>{
        console.log('Kullanıcı Ayrıldı');
    });
});
