var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler =function connected() {
	console.log('connection successful');
	eventEmitter.emit('data_recevied');
}
eventEmitter.on('connection',connectHandler);
eventEmitter.on('data_recevied',function() {
	console.log('data recevied successfully');
});
eventEmitter.emit('connection');
console.log("program Ended");

