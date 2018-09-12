const   mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/ders',{useNewUrlParser: true})
    .then(()  =>{
        console.log('veritabanına   baağlanıldı');
    })
    .catch((err) =>{
        console.log('veritabanına  giremedim');
    });