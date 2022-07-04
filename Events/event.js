const EventEmitter = require('events'); //modulo events nativo do node

class Event extends EventEmitter {} //copia do modulo importado acima
const myEvent = new Event();

myEvent.on('security', (x, y) => {
    console.log(`${x} ${y}`);
});

myEvent.emit('security', 'user', 'has changed password');