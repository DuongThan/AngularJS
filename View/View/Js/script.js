/// <reference path="angular.min.js" />

var ungdungAngularJS = angular.module("ungdungAngularJS", ['ngRoute']);

ungdungAngularJS.config(function ($routeProvider) {
       $routeProvider.
          when('/themSV', {
              templateUrl: 'themSV.html',
              controller: 'themSVController'
          }).
          when('/quansatSV', {
              templateUrl: 'quansatSV.html',
              controller: 'quansatSVController'
          }).
          otherwise({
              redirectTo: '/themSV'
          });
   });

ungdungAngularJS.controller('themSVController', function ($scope) {
    $scope.message = "Trang nay se duoc su dung de hien thi mot form de them sinh vien";
});

ungdungAngularJS.controller('quansatSVController', function ($scope) {
    $scope.message = "Trang nay se duoc su dung de quan sat tat ca sinh vien";
});