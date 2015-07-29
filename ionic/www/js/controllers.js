angular.module('starter.controllers', [])
    .controller('HomeCtrl', function($scope, SocketService, SettingsService) {

        var mouseEvent = null;

        $scope.updateMouseStart = function () {
          mouseEvent = null;
        };

        $scope.updateMousePos = function ($event) {
            //console.log($event);

            if (mouseEvent) {
                var adjustments = {sensitivity: SettingsService.get('sensitivity')};
                console.log("adjustments:", adjustments);
                var deltaObj = {deltaX: $event.gesture.deltaX - mouseEvent.x, deltaY: $event.gesture.deltaY - mouseEvent.y, sensitivity: adjustments.sensitivity};
                SocketService.emit('movemouse', JSON.stringify(deltaObj))
            }
            mouseEvent = {x: $event.gesture.deltaX, y: $event.gesture.deltaY};

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
