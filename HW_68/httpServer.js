'use strict';


const http = require('http'),
    fs = require('fs');

var server = http.createServer((request, response) => {

    const rs = fs.createReadStream(process.argv[3]);//, 'utf-8',
       // function callback(data) {
            //rs.on('data', data => response.write(data));
            //rs.on('end', () => response.end());
           rs.pipe(response);
      //  });/

}).listen(process.argv[2]);


