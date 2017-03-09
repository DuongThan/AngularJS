/// <reference path="angular.min.js" />
var myApp = angular.module("main", ["ngRoute"])
            .controller("Home", function () {
                this.message = "HOME Page";
            })
            .controller("Student", function ($http, $route) {
                var a = this;
                $http.get("/StudentService.asmx/GetAllData")
                        .then(function (respone) {
                            a.students = respone.data;
                        });
                this.reload = function () {
                    $http.get("/StudentService.asmx/GetAllData")
                            .then(function (respone) {
                                a.students = respone.data;
                            });
                };
            })
