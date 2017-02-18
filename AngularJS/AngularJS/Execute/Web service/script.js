/// <reference path="D:\Learn Web\AngularIS\AngularJS\AngularJS\Script/angular.min.js" />
var myApp = angular.module("main", [])
                    .controller("controller", function ($scope, $http, $log) {

                        var successCallBack = function (response) {
                            $scope.model = response.data;
                        };

                        var errCallBack = function (reason) {
                            $scope.err = reason.data;
                        }

                        $http({
                            method: "GET",
                            url: "/EmployeeServer.asmx/GetAllEmployee"
                        }).then(successCallBack, errCallBack);

                    });

