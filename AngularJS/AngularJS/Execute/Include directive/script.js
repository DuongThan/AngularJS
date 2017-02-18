/// <reference path="../angular.min.js" />
var myApp = angular.module("main", [])
                    .controller("controller", function ($scope) {
                        var model = [
                            { name: "Ngô Xuân Dương", age: 21, gender: 1, address: "Quang Ninh" },
                            { name: "Dương Thần", age: 21, gender: 2, address: "Quang Ninh" },
                            { name: "Hanhyoki", age: 21, gender: 3, address: "Quang Ninh" },
                        ];
                        $scope.model = model;
                        $scope.selectedview = "view1.html";
                        
                    });