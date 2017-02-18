/// <reference path="../angular.min.js" />
var myApp = angular.module("main", [])                    
                    .controller("controller", function ($scope) {
                        var model = [
                            { name: "Ngô Xuân Dương", age: 21, gender: 1 },
                            { name: "Dương Thần", age: 21, gender: 2 },
                            { name: "Hanhyoki", age: 21, gender: 3 },
                        ];
                        $scope.model = model;
                    });

