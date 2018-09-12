const   fs=require('fs');
const file =  'a.wmv';

const  oku  =fs.createReadStream(file);
const olustur  =  fs.createWriteStream('yeni.mp4');

oku.on('data',(parca)   =>{
   console.log('veri  geldi');
});

oku.pipe(olustur);
olustur.on('finish',  ()=>{
   console.log('yeni   dosya  oluştu.');
});
