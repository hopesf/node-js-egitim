const express = require('express');
const router = express.Router();

//models
const Book = require('../models/Book');

//db ye veri eklemek
router.post('/ekle', function(req, res, next) {
    const book = new Book({
        title: 'ebennnn',
        published: true,
        comments: [
            {message: "asdsadtap."},
            {message: "asdasddim."}
        ],
        meta: {
            votes: 12,
            favs: 104
        }

    });

    book.save((err,data) =>{
        if(err)
            console.log(err);
        res.json(data);
    });
});
// db den veri aramak
router.get('/ara',(req,res) =>{
   Book.find({ published: true }, 'title', (err,data) =>{ //title yazarak sınırladım öbür türlü hepsini çeker.
      res.json(data);
   });
});

//db de baştan aşağı okurken olan ilk denemeyi çekecek.
router.get('/bitaneara', (req,res) =>{
   Book.findOne({ title: "deneme"}, (err,data) =>{ // {} içerisindekini silersem db yi tamamen arar.
       res.json(data);
   });
});

//id ye göre aramak
router.get('/araByid', (req,res) =>{
    Book.findById('5b8ae3458160080a180dea29', (err,data) =>{
        res.json(data);
    });
});


// Update işlemi
router.put('/update', (req,res) =>{
    Book.update(
        { published: true },
        { published:false },
        /* birden fazla alan güncellemek için şu kodu eklemem gerekiyor.normalde ilk bulduğunu günceller.
        { multi:true },
         */

        /* eğer güncelleyecek veri yok ise publish false olarak yeni kayıt ekler.
        { upsert:true },
         */

        (err,data) =>{
            res.json(data);
        });
});


//id ye göre update yapmak
router.put('/updateByid', (req,res) =>{
    Book.findByIdAndUpdate(
        '5b8adb5d210fde0fe47a39b8',
        {
            title: 'update by id başarılı'
        },
        (err,data) =>{
        res.json(data);
    });
});


//istediğim özellikdeki birini bulup db den silme işlemi (ben id ile yaptım).
router.delete('/sil',(req,res) =>{
   Book.findOneAndRemove('5b8ae414f585c50e00502050',(err,data) =>{
       res.json(data);
    });
});

module.exports = router;
