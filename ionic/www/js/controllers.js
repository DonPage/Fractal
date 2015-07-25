angular.module('starter.controllers', [])
    .controller('HomeCtrl', function($scope) {

        $scope.updateMousePos = function ($event) {

        };

    })

    .controller("SettingsCtrl", function ($scope, SettingsService) {
        $scope.SettingsService = SettingsService;

        $scope.sensitivity = SettingsService.get('sensitivity');

        $scope.sensitivityChange = function (val) {
            SettingsService.set('sensitivity', val);
        }
    });
