angular.module('starter.controllers', [])

    .controller('HomeCtrl', function($scope) {

        $scope.updateMousePos = function ($event) {
            console.log($event);
        }

    });
