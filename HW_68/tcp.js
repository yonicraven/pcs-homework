'use strict';

     var net = require('net');
     var server = net.createServer(function (socket) {
         const now = new Date(),
               month = "0" + (now.getMonth() + 1); 
       socket.write(now.getFullYear() + '-' + month + '-' + now.getDate()+
        ' ' +  now.getHours()+ ':' +  now.getMinutes() + '\n');
       //socket.write(now.toLocaleTimeString() + '\n');
        socket.end();
     });
     server.listen(process.argv[2]);