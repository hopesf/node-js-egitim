const fs = require('fs');

fs.readFile('oku.txt', (err, data) => {
    if(err)
        throw err;

    console.log(data.toString());
});