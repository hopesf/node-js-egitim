const   fs =  require('fs');
const  file =  'a.wmv';

const readStream  = fs.createReadStream(file);

readStream.on('data', (parca)   =>{
   console.log(parca.length,'byte Geldi');
});

readStream.on('end',  (parca)   =>{
   console.log('işlem   bitti');
});