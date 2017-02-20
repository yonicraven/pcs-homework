const events = require('events'),
    eventEmitter = new events.EventEmitter();

//eventEmitter.setMaxListeners(11);

eventEmitter.on('second', () => {
    console.log(Date());
});

function getTime() {
    setInterval(function(){
        eventEmitter.emit('second');
},1000);
    
}

getTime();

