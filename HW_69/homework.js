module.exports = function (req, res, next) {
    res.write(`<h1>................................</h1><br/>
<p>const connect = require('connect'),
    app = connect();
const app = require('connect')();

app.use((req, res, next) => {
    res.write('<h1>Homework!</h1><br/>');
    next();
});

app.use('/index', (req, res, next) => {
    res.write('Here is homework 69!<br/>');
    next();
});

app.use('/homework', (req, res, next) => {
    res.write('Here is homework 69!<br/>');
    next();
});

app.use((req, res) => {
    res.end('<hr/><h5>Copyright 2017</h5>');
});

app.listen(80);


`);
    next();
}