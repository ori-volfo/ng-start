(function(){
    "use strict";

    angular
        .module("myApp")
        .controller("myCtrl",function($scope, $rootScope){

            $scope.$on('search', function(event,term){
                $rootScope.$broadcast('searchTerm',term);
            });

        });
})();