/// <reference path="D:\Learn Web\AngularIS\AngularJS\AngularJS\Script/angular.min.js" />

var myApp = angular.module("main", [])
                    .controller("controller", function ($scope,stringService) {
                        $scope.transformstring = function(input)
                        {
                            $scope.output = stringService.processString(input);
                        }
                    });