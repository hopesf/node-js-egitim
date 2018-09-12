const  fs =   require('fs');

fs.unlink('oku.txt',  (asd) =>  {
    if(asd)
        throw asd;
    console.log('dosya  başarıyla  silindi!');
});