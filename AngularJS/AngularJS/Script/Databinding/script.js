/// <reference path="../angular.min.js" />
var myApp = angular
            .module("main", [])
            .controller("controller", function ($scope) {
                var obj = {
                    name: "Duong Than",
                    age: 21,
                    gender: "Male"
                };
                $scope.obj = obj;
            });