

// var fs = require('fs');

// var readStream = fs.createReadStream('file81.txt');

// /*Write to the console when the file is opened:*/
// readStream.on('open', function () {
//   console.log('The file is open');
// });

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');


              

