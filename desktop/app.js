/**
 * Main Application File
 */

'use strict';

var server = require('http').createServer();
var io = require('socket.io')(server);

var robot = require('robotjs');

io.on('connection', function(socket){

    socket.on('event', function (data) {
        console.log("IOevent:", data);

    })

});
server.listen(3000);


/**
 * Testing robot stuff
 */

var mouse = robot.getMousePos();
console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);

for (var i = 0; i < 100; i++) {
    robot.moveMouse(mouse.x+i, mouse.y+i);
    if (i == 99) {
        mouse = robot.getMousePos();
        console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
    }
}
