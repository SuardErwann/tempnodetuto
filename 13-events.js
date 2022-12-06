// Les events
const EventEmitter = require('events');

// .on -> set l'event
// .emit -> fire l'event

const customEmitter = new EventEmitter();

// Premier param = nom de l'event, deuxieme = callback func
customEmitter.on('response', (name, age) => {
    console.log(`Data received, you're ${name} and you're ${age} years old`);
});
customEmitter.on('response', () => {
    console.log(`Some more logic on same eventName`);
});


customEmitter.emit('response', 'Erwann', 30);