/*
    fs.appenedFile();    = bu  arkadaş dosya   içeriğini değiştirmeden veri   ekliyor.
    fs.WriteFile();      = bu   arkadaş  ise  direk  üzerine   yazıyor.
 */

const fs = require('fs');
fs.appendFile('oku.txt', '\n Götüne Giren Elimdir.', (err) =>  {
    if(err)
        throw  err;
    console.log('ekleme  yapıldı.')
});