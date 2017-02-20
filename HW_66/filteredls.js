const fs = require('fs');
var extFilter = process.argv[3];

var path = "C:/xampp/htdocs/node/learnyounode";

function extension(element) {
  var extName = path.extname(element);
  return extName === '.' + extFilter; 
};

fs.readdir(path/* process.argv[2]*/,  (err, data) => {
    if (err) {
        console.error(err);
    } else {
        //let a = data.toString();
        //console.log(data);
        //for (var i in data){//= 0; i < a.length; i++) {
            var a = data.filter(extension).forEach(function(value) {
            console.log(value);});
            //if(data[i])
            console.log(data);
           console.log(a);// + '\n');
       // }
        

    }
});