/// <reference path="angular.min.js" />
var myApp = angular.module("demoooo", ['ngRoute'])
            .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.
                    when("/home", {
                        templateUrl: "Templates/home.html",
                        controller: "homeController"
                    }).
                    when("/Courses", {
                        templateUrl: "Templates/Courses.html",
                        controller: "CoursesController"
                    });
            }])
            .controller("homeController", function ($scope) {
                $scope.title = "HOME";
            })
.controller("CoursesController", function ($scope) {
    $scope.message = "COURSES";
});