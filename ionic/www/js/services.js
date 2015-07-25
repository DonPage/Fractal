angular.module('starter.services', [])

.factory('SettingsService', function() {

        var defaults = {
            'sensitivity' : 1
        };

        var SettingService = {};

        SettingService.get = function (key) {
            return window.localStorage[key];
        };

        SettingService.set = function (key, val) {
            window.localStorage[key] = val;
        };

        return SettingService;
});
