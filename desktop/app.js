/**
 * Main Application File
 */

'use strict';

var server = require('http').createServer();
var io = require('socket.io');

var robot = require('robotjs');

io.on('connection', function(socket){

    socket.on('event', function (data) {
        console.log("IOevent:", data);

    })

});
server.listen(3000);


/**
 * Testing
 */
