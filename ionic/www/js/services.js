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

        var _io = SettingsService.get('ip') ? io(SettingsService.get('ip')) : io();

        var SocketService = {};

        SocketService.emit = function (event, obj) {
            _io.emit(event, obj);
        };

        SocketService.on = function (event, callback) {
            _io.on(event, callback);
        };

        return SocketService;
    });
