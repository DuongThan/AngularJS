/// <reference path="../angular.min.js" />

var myApp = angular
            .module("main", [])
            .controller("controller", function ($scope) {
                var obj = [
                    {
                        name: "Duong 1",
                        dateOfBirth: new Date(1996, 7, 23),
                        gender: "Male",
                        salary: 150000.06
                    },
                    {
                        name: "Duong 2",
                        dateOfBirth: new Date(1996, 8, 23),
                        gender: "Male",
                        salary: 100000.05
                    },
                    {
                        name: "Duong 3",
                        dateOfBirth: new Date(1996, 8, 23),
                        gender: "Male",
                        salary: 100000.02
                    },
                    {
                        name: "Duong 4",
                        dateOfBirth: new Date(1996, 8, 23),
                        gender: "Male",
                        salary: 100000.01
                    },
                    {
                        name: "Duong 5",
                        dateOfBirth: new Date(1996, 8, 23),
                        gender: "Male",
                        salary: 100000.00
                    },
                    {
                        name: "Duong 6",
                        dateOfBirth: new Date(1996, 8, 23),
                        gender: "Male",
                        salary: 100000.99
                    },
                    {
                        name: "Duong 7",
                        dateOfBirth: new Date(1996, 8, 23),
                        gender: "Male",
                        salary: 100000.92
                    },
                    {
                        name: "Duong 8",
                        dateOfBirth: new Date(1996, 8, 23),
                        gender: "Male",
                        salary: 100000.91
                    },
                ];

                $scope.obj = obj;
                $scope.rowLimit = 5;
                $scope.sort_item = "name";

                $scope.reverseSort = false;
                $scope.sortData = function (column) {
                    $scope.reverseSort = ($scope.sort_item == column) ? !$scope.reverseSort : false;
                    $scope.sort_item = column;
                }

                $scope.getSortClass = function(column)
                {
                    if($scope.sort_item == column)
                    {
                        return $scope.reverseSort ? "arrow-up" : "arrow-down";
                    }
                    return "";
                }
            });
