const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        let a = data.toString();
        var count = 0;
        for (var i = 0; i < a.length; i++) {
            if (a[i] == '\n')
                count++;
        }
        //console.log(a);
        console.log(count);
        

    }
});