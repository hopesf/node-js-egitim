const app = require('express')();
const http = require('http').Server(app).listen(3000);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('oda', (data) =>{
       socket.join(data.name, ()=>{
           io.to(data.name).emit('yeni kisi', { kisi: onlinekisiler(io,data) } );
           socket.emit('bilgi',{mesaj:'odaya girdiniz.'});
       });
    });
    socket.on('cik',(data) =>{
        socket.leave(data.name,()=>{
            io.to(data.name).emit('leaved', { kisi: onlinekisiler(io,data) } );
            socket.emit('socket.leaved', { mesaj:'odadan ayrıldınız.' } );
        });
    });
});

const onlinekisiler= (io,data)=> {
    const room=io.sockets.adapter.rooms[data.name];
    return room ? room.length :0;
};