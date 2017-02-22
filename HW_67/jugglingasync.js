'use strict';

const http = require('http');
  var   thedata1 = "",
        thedata2 = "",
        thedata3 = "",
        counter = 0;

http.get(process.argv[2], function callback (response) {
    response.setEncoding('utf-8');
     response.on("data", function (data) { 
          thedata1 +=  data  ;    
     });
    response.on('end', function(){
        counter++;
        print();
     });
 });

 
http.get(process.argv[3], function callback (response) {
    response.setEncoding('utf-8');
     response.on("data", function (data) { 
          thedata2 +=  data  ;    
     });
    response.on('end', function(){
        counter++;
        print();
     });
 });

 
http.get(process.argv[4], function callback (response) {
    response.setEncoding('utf-8');
     response.on("data", function (data) { 
          thedata3 +=  data  ;    
     });
    response.on('end', function(){
        counter++;
        print();
     });
 });

 function print(){
     if (counter === 3){
         console.log(thedata1);
         console.log(thedata2);
         console.log(thedata3);
     }
 }
