var logger = require('events');
var emitter = new logger.EventEmitter();


var user = "User1",
    timeNow = new Date(),
    hour = timeNow.getHours(),
    minute = timeNow.getMinutes(),
    seconds = timeNow.getSeconds(),
    milliSeconds = timeNow.getMilliseconds();

var logIn = function () {
    console.log(user + " logIn. Time: " + hour + ":" + minute + ":" + seconds + ":" + milliSeconds);
};
var someAction = function () {
    console.log(user + " someAction. Time: " + hour + ":" + (minute + 1) + ":" + seconds + ":" + milliSeconds);
};
var logOut = function () {
    console.log(user + " logOut. Time: " + (hour + 1) + ":" + (minute + 5) + ":" + seconds + ":" + milliSeconds);
};

emitter.on('in', logIn);
emitter.on('action', someAction);
emitter.on('out', logOut);


emitter.emit('in');

function userAction() {
    emitter.emit('action');
}
function userLogOut() {
    emitter.emit('out');
}

setTimeout(userAction, 1000);
setTimeout(userLogOut, 2000);