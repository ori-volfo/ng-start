(function(){

    "use strict";

    angular
        .module("myApp")
        .factory("myFactory", function($http){

            function getData(){
                return $http.get('data/classified.json');
            }

            return {
                getData: getData
            }
        })
})();