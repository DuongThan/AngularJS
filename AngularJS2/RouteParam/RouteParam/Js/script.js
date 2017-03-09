/// <reference path="angular.min.js" />

var myApp = angular.module("demo", ["ngRoute"])
            .config(function ($routeProvider) {
                $routeProvider
                    .when("/home", {
                        templateUrl: "Templates/Home.html",
                        controller: "homeController"
                    })
                    .when("/students", {
                        templateUrl: "Templates/Students.html",
                        controller: "studentsController"
                    })
                    .when("/students/:id", {
                        templateUrl: "Templates/Detail.html",
                        controller: "detailController"
                    });
            })
            .controller("homeController", function ($scope) {                
                $scope.title = "HOME PAGE";
            })
            .controller("studentsController", function ($scope, $http,$route) {
                //$scope.$on("$routeChangeStart", function (event, next, current) {
                //    if (!confirm("Do you sure you want to navigate away from this page " + next.$$route.originalPath)) {
                //        event.preventDefault();
                //    }
                //});

                $scope.$on("$locationChangeStart", function (event, next, current) {
                    if (!confirm("Do you sure you want to navigate away from this page " + next)) {
                        event.preventDefault();
                    }
                });

                $http.get("/StudentService.asmx/GetAllData")
                    .then(function (respone) {
                        $scope.students = respone.data;
                    });
            })
            .controller("detailController", function ($scope, $http, $routeParams) {
                $http({
                    url: "StudentService.asmx/GetByID",
                    params: { id: $routeParams.id },
                    method: "get"
                })
                .then(function (respone) {
                    $scope.detail = respone.data;
                });
            });
