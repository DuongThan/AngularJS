/// <reference path="../angular.min.js" />
var myApp = angular
            .module("main", [])
            .controller("controller", function ($scope) {
                //var obj = [
                //    {
                //        name: "Duong Than",
                //        age: 21,
                //        gender: "Male"
                //    },
                //    {
                //        name: "Duong Xuan Ngo",
                //        age: 21,
                //        gender: "Male"
                //    },
                //    {
                //        name: "Hanhyoki",
                //        age: 21,
                //        gender: "Male"
                //    },
                //    {
                //        name: "Duong Than",
                //        age: 21,
                //        gender: "Male"
                //    },
                //    {
                //        name: "Duong Than",
                //        age: 21,
                //        gender: "Male"
                //    },
                //    {
                //        name: "Duong Than",
                //        age: 21,
                //        gender: "Male"
                //    },
                //];
                var obj = [
                    {
                        name: "Duong Than",
                        girlfriend: ["Ngoc trinh", "Mai phuong thuy", "chi pu"]
                    },
                    {
                        name: "Duong Xuan Ngo",
                        girlfriend: ["Ngoc trinh", "Mai phuong thuy", "chi pu"]
                    },
                    {
                        name: "Hanhyoki",
                        girlfriend: ["Ngoc trinh", "Mai phuong thuy", "chi pu"]
                    },

                ];
                $scope.obj = obj;
            });