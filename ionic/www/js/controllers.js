angular.module('starter.controllers', [])
    .controller('HomeCtrl', function($scope, SocketService, SettingsService) {

        $scope.updateMousePos = function ($event) {
            var mouseEvent = {
                deltaX : $event.gesture.deltaX,
                deltaY: $event.gesture.deltaY,
                sensitivity: SettingsService.get('sensitivity')
            };

            SocketService.emit('movemouse', JSON.stringify(mouseEvent));
        };

        $scope.leftClick = function () {
            SocketService.emit('leftclick');
        };

        $scope.rightClick = function () {
            SocketService.emit('rightclick')
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
