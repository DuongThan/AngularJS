/// <reference path="../angular.min.js" />
var myApp = angular
            .module("main", [])
            .controller("controller", function ($scope) {
                var obj = [
                    {
                        name: "C#",
                        like: 0,
                        dislike: 0
                    },
                    {
                        name: "Java",
                        like: 0,
                        dislike: 0
                    },
                    {
                        name: "PHP",
                        like: 0,
                        dislike: 0
                    },
                    {
                        name: "JS",
                        like: 0,
                        dislike: 0
                    },

                ];
                $scope.obj = obj;
                $scope.incrementlike = function (obj) {
                    obj.like++;
                };
                $scope.incrementdislike = function (obj) {
                    obj.dislike++;
                };
            });