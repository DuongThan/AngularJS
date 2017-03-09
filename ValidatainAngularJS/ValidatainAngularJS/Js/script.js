/// <reference path="angular.min.js" />

var myApp = angular.module("validate", [])
            .controller("controller", function ($scope) {
                $scope.reset = function () {
                    //$scope.ID = 1;
                    //$scope.Name = "Ngô Xuân Dương";
                    //$scope.Address = "Quảng Ninh";
                }
                $scope.reset();
            });