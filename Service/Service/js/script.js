/// <reference path="angular.min.js" />

var myApp = angular.module("service", []);
myApp.factory("tich", function () {
    var factory = {};
    factory.phepnhan = function (a, b) {
        return a * b;
    }
    return factory;
});

myApp.service("Tichmotso", function (tich) {
    this.mu = function (a, b) {
        if (b == 1) return tich.phepnhan(a, 1);
        else return a * this.mu(a, b - 1);
    };
});

myApp.controller("controller", function ($scope, Tichmotso) {
    $scope.Tich = function () {
        $scope.ketqua = Tichmotso.mu($scope.so1, $scope.so2);
    }
})