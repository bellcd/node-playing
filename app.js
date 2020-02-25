// const EventEmitter = require('events');
// const emitter = new EventEmitter();
const Logger = require('./logger');

// instantiate an instance of Logger
const myLogger = new Logger('http://mylogger.io/log');

// register a listener on that instance
myLogger.on('ListenerCalled', (arg) => console.log('Listener called', arg));

// invoke the log function
myLogger.log('message');