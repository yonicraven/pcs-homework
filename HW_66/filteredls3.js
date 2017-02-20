
var fs = require('fs');  //require node filesystem module
var path = require('path'); //require node path module (a couple of tools for reading path names)
//var path = "C:/xampp/htdocs/node/learnyounode";

var pathSupplied = process.argv[2];
var extFilter = process.argv[3];

function extension(element) {
  var extName = path.extname(element);
  return extName === '.' + extFilter; 
};

fs.readdir(pathSupplied, function(err, list) {
  list.filter(extension).forEach(function(value) {
    console.log(value);
  });
});