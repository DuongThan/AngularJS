
var myApp = angular.module("main", [])
                    .controller("controller", function ($scope,$location,$anchorScroll) {
                        $scope.scrollTo = function(scrollLocation)
                        {
                            $location.hash(scrollLocation);
                            $anchorScroll();
                        }
                    });