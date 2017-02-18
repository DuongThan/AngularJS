/// <reference path="../angular.min.js" />
var myApp = angular.module("main", [])
                    .controller("controller", function ($scope) {
                        var model = [
                            { name: "Ngô Xuân Dương", age: 21, gender: 1, address: "Quang Ninh" },
                            { name: "Dương Thần", age: 21, gender: 2, address: "Quang Ninh" },
                            { name: "Hanhyoki", age: 21, gender: 3, address: "Quang Ninh" },
                        ];
                        $scope.model = model;
                        $scope.linkdata = "HideShow2.html";
                        var setok = false;

                        $scope.hide = function(gender)
                        {
                            if (setok) {
                                switch (gender) {
                                    case 1: case 2:
                                        return true;
                                }
                                return false;
                            }
                            else
                                return true;
                        }
                        $scope.showgender = function ()
                        {
                            setok = !setok;
                        }
                    });