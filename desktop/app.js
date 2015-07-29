/**
 * Main Application File
 */

'use strict';

var server = require('http').createServer();
var io = require('socket.io')(server);

console.log("app.js");

var config = require('./config');

var robot = require('robotjs');

var mouseDragMod = 0.055;

var velocityDragMod = 0.152;


io.on('connection', function (socket) {

    console.log("CONNECT");

    socket.on('leftclick', function (data) {
        console.log("leftclick:", data);
        robot.mouseClick();
    });

    socket.on('movemouse', function (data) {
        var parse = JSON.parse(data);
        var mouse = robot.getMousePos();
        //console.log(mouse.x, mouse.y);
        //console.log(parse.velX, parse.velY);
        var newX = mouse.x + parse.deltaX * (mouseDragMod * parse.sensitivity);
        var newY = mouse.y + parse.deltaY * (mouseDragMod * parse.sensitivity);

        robot.moveMouse(newX, newY);



    })


});

server.listen(config.port, config.ip);


/**
 * Testing robot stuff
 */

//var mouse = robot.getMousePos();
//console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
//
//for (var i = 0; i < 100; i++) {
//    robot.moveMouse(mouse.x+i, mouse.y+i);
//    if (i == 99) {
//        mouse = robot.getMousePos();
//        console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
//    }
//}
