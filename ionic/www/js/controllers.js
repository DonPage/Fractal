angular.module('starter.controllers', [])
    .controller('HomeCtrl', function($scope, SocketService) {

        $scope.updateMousePos = function ($event) {
            console.log("event", $event);

            SocketService.moveMouse('x', 'y'); //testing;

        };

    })

    .controller("SettingsCtrl", function ($scope, SettingsService) {
        $scope.SettingsService = SettingsService;

        $scope.sensitivity = SettingsService.get('sensitivity');
        $scope.ip = SettingsService.get('ip');

        $scope.sensitivityChange = function (val) {
            SettingsService.set('sensitivity', val);
        };

        $scope.ipChange = function (val) {
            SettingsService.set('ip', val);
        };
    });
