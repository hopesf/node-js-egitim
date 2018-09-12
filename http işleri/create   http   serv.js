const http  =  require('http');

const  server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type':'text/html; charset=utf-8'});
    response.write('selam http sunucun oluşturuldu!');
    response.end();
});

server.listen(3000);
