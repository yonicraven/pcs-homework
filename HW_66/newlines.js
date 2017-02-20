const fs = require('fs');

var data =fs.readFileSync(process.argv[2], 'utf-8');//, (err, data) => {
    
        //let a = data.toString();
        var count = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i] == '\n')
                count++;
        }
        //console.log(a);
        console.log(count);
    