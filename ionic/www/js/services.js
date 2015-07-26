angular.module('starter.services', [])

    .factory('SettingsService', function() {

        var defaults = {
            'sensitivity' : 1,
        };

        var SettingService = {};

        SettingService.get = function (key) {
            return window.localStorage[key] || defaults[key];
        };

        SettingService.set = function (key, val) {
            window.localStorage[key] = val;
        };

        return SettingService;
    })

    .factory('SocketService', function (SettingsService) {

        //var _io = SettingsService.get('ip') ? io(SettingsService.get('ip')) : io();
        var _io = io('http://localhost:3000');

        var SocketService = {};

        SocketService.moveMouse = function (x, y) {
            _io.emit('event', {x: x, y: y})
        };

        return SocketService;
    });
