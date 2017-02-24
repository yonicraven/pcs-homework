'use strict';


const http = require('http'),
    fs = require('fs');

var server = http.createServer((request, response) => {

    if(request.method === "POST"){

        var map = require('through2-map');
        request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();//split('').reverse().join('')
    })).pipe(response);
    }

}).listen(process.argv[2]);