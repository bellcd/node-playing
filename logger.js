const EventEmitter = require('events');
const emitter = new EventEmitter();

// make logger a class
const Logger = function(url) {
  EventEmitter.call(this);
  this.url = url; // url to send the logged data to
}

// have the Logger class delegate to EventEmitter
Logger.prototype = Object.create(EventEmitter.prototype);

// set the constructor property of the prototype object we just replaced Logger.prototype with, to be Logger (instead of EventEmitter, which it would have been because of Object.create)
Logger.prototype.constructor = Logger;

// add a method to the logger class that does the logging
Logger.prototype.log = function(message) {
  // Send an HTTP request (faked with console.log for now, for simplicity)
  console.log(message);

  // The log method on the Logger class raises an event
  this.emit('ListenerCalled', { id: 1, message: 'hello world' });
}

module.exports = Logger;