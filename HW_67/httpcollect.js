'use strict';

const http = require('http');
  var thedata = "";

http.get(process.argv[2], function callback (response) {
    response.setEncoding('utf-8');
     response.on("data", function (data) { 

          thedata +=  data  ;
         
     });
    response.on('end', function(){
         console.log(thedata.length);
         console.log(thedata);
     });
 });

 
