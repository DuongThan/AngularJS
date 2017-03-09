/// <reference path="angular.min.js" />
var myApp = angular.module("main", [])
                .controller("countryController", function () {
                    this.name = "VietNam";
                })
                .controller("stateController", function () {
                    this.name = "HaNoi";
                })
                .controller("cityController", function () {
                    this.name = "QuanNinh";
                })