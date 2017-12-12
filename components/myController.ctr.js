(function(){
    "use strict";

    angular
        .module("myApp")
        .controller("myCtrl",function($scope, $http, myFactory){

            myFactory.getData().then(function(response){
                $scope.classifieds = response.data;
                $scope.categories = getCategories($scope.classifieds);
            });

            function getCategories(classifieds){
                var categories = [];
                angular.forEach(classifieds, function(item) {
                    angular.forEach(item.categories, function(category){
                        categories.push(category);
                    });
                });

                return _.uniq(categories);
            }

        });
})();