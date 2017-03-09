/// <reference path="D:\Learn Web\AngularJS2\AngularJS2\AngularJS2\angular.min.js" />
var myApp = angular.module("main", [])
            .controller("controller", function ($scope,$location,$anchorScroll) {
                $scope.scrollTo = function (scrollLocation) {
                    $location.hash(scrollLocation);
                    //$anchorScroll.yOffset = 20;
                    $anchorScroll();
                }

            });