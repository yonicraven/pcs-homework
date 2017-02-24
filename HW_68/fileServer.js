'use strict';

const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript'
    };
let cache = {},
    datainfile;

var server = http.createServer((request, response) => {
    console.log('serving', request.url);

    const ext = path.extname(request.url);
    if (ext && contentType[ext]) {
        response.setHeader('Content-type', contentType[ext]);
    }
    response.setHeader('X-Powered-By', 'PCS');

    if (cache[request.url]) {
        console.log('Serving from cache');
        cache[request.url].accessed = new Date();
        response.end(cache[request.url].data);
    } else {
        console.log('Serving from disk');
        fs.readFile('content/' + request.url, 'utf-8', (err, data) => {
            if (err) {
                response.setHeader('Content-type', contentType['.html']);
                if (err.code === 'ENOENT') {
                    response.statusCode = 404;
                    response.write('No such page. Sorry.<br><h1>404</h1>');
                } else {
                    response.statusCode = 500;
                }
                response.end(err.message);
                return;
            }
            fs.stat('content/' + request.url, function (err, stats) {
                if (err) {
                    return console.error(err);
                }


                cache[request.url] = {
                    accessed: new Date(),
                    data: data,
                    loaded: new Date(),
                    modified: stats.mtime
            };
            });

            response.end(data);
        });
    }
}).listen(8000);

setInterval(() => {
    const cutOff = new Date() - 30000;

    Object.keys(cache).forEach(key => {
        if (cache[key].accessed < cutOff) {
            delete cache[key];
        }
        else if (fs.stat('content/' + key, function (err, stats) {
            if (err) {
                return console.error(err);
            }
            console.log(stats + "hello");
            if (stats.mtime > cache[key].modified) {
                console.log("got here");
                delete cache[key];
            }
        }));
    });



}, 5000);


