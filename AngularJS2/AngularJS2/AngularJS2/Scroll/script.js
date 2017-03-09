/// <reference path="D:\Learn Web\AngularJS2\AngularJS2\AngularJS2\angular.min.js" />
var myApp = angular.module("main", [])
            .controller("controller", function ($scope,$location,$anchorScroll,$http) {
                $http.get("/CountryService.asmx/GetAll")
                        .then(function (response) {
                            $scope.countries = response.data;
                        });
                $scope.scrollTo = function(scrollLocation)
                {
                    $location.hash(scrollLocation);
                    $anchorScroll();
                }

            });