const fs = require('fs');

    fs.readFile('server2.js', (err, data) => {
    if (err) {
        console.error(err);
    } else {
      // console.log('File Contents:\n', data.toString());
       console.log(add(14,3));
       console.log(subtract(97,10));
       const myString = data.toString();
       console.log(reverse(myString));
    }
});

function add(a, b){
    return a + b;

}

function subtract(a, b){
    return a - b;

}

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

console.log('Done');


