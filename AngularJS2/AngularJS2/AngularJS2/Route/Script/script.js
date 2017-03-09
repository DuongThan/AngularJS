/// <reference path="D:\Learn Web\AngularJS2\AngularJS2\AngularJS2\angular.min.js" />
var myApp = angular.module("Demo", ["ngRoute"])
            .config(function ($routeProvider) {
                $routeProvider
                    .when("/Home", {
                        templateUrl: "Template/Home.html",
                        controller: "HomeController"
                    })
                    .when("/Courses", {
                        templateUrl: "Template/Courses.html",
                        controller: "CoursesController"
                    })
                    .when("/Student", {
                        templateUrl: "Template/Student.html",
                        controller: "StudentController"
                    })
                    .otherwise({
                        rediectTo :"/Home"
                    })
                       
            })
            .controller("HomeController", function ($scope) {
                $scope.message = "Home Page 2222";
            })
            .controller("CoursesController", function ($scope) {
                $scope.c = [{ name: "C#" }, { name: "C++" }, { name: "C++" }, { name: "C++" }, { name: "C++" }];
            })
            .controller("StudentController", function ($scope, $http) {
                $http.get("/StudentService.asmx/GetAllData")
                    .then(function (respone) {
                        $scope.students = respone.data;
                    });
            });
