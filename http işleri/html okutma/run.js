const http = require('http');
const fs=  require('fs');

const serv  =  http.createServer((req,res) => {
   res.writeHead(200, {'content-type':'text/html; charset=utf-8'});
   fs.readFile('./index.html', (err, data) => {
       if(err)
           throw  err;
       res.end(data);
    });
});

serv.listen(3001);