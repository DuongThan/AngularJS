/// <reference path="../angular.min.js" />
var myApp = angular
            .module("main", [])
            .controller("image", function ($scope) {
                var obj = {
                    name: "Mobile phome",
                    image: "/image/1.jpg"
                };

                $scope.obj = obj;
            });