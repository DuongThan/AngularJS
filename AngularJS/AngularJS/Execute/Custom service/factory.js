/// <reference path="D:\Learn Web\AngularJS\AngularJS\AngularJS\Script/angular.min.js" />

/// <reference path="script.js" />
myApp.factory('stringService', function () {
    return {
        processString: function (input) {
            if (!input) {
                return;
            }
            var outPut = "";
            for (var i = 0; i < input.length; i++) {
                if (input[i] == input[i].toUpperCase())
                    outPut += " ";
                outPut += input[i];
            }
            return outPut;
        }
    };
});