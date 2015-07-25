angular.module('starter.services', [])

.factory('SettingsService', function() {

        var defaults = {
            'sensitivity' : 1
        };

        var SettingService = {};

        SettingService.get = function (key) {
            return window.localStorage[key] ? window.localStorage[key] : defaults[key];
        };

        return SettingService;
});
