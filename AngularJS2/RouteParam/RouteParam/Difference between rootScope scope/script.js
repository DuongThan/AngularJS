/// <reference path="angular.min.js" />

var myApp = angular.module("main", [])
                .controller("redController", function ($scope, $rootScope) {
                    $scope.red = "RED";
                    $rootScope.rootScope = "ROOT SCOPE";
                })
                .controller("blueController", function ($scope) {
                    $scope.blue = "BLUE";
                })