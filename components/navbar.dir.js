(function() {
    "use strict";

    angular
        .module("myApp")
        .component('navbar', {
            templateUrl: 'components/views/navbar.tpl.html',

            controller: function($scope){
                var vm = this;
                $scope.$watch('itemSearch',function(newVal){
                    $scope.$emit('search',newVal);
                });
            }
        });
})();