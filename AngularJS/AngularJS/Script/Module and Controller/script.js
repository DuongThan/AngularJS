/// <reference path="../angular.min.js" />
var myApp = angular.module("main", []);

myApp.controller("controller", function ($scope) {

    var obj = {
        name: "Ngô Xuân Dương",
        age: 21,
        gender: "Male"
    };

    $scope.message = "AngularJS tutorial";
    $scope.obj = obj;
})