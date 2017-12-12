(function() {
    "use strict";

    angular
        .module("myApp")
        .component('homeView', {
            templateUrl: 'components/views/home.tpl.html',
            controller: ['myFactory','$scope',function(myFactory,$scope){
                var vm = this;
                vm.deleteItem = deleteItem;
                vm.searchItem;

                myFactory.getData().then(function(response){
                    vm.items = response.data;
                });

                function deleteItem(item){
                    var index = vm.items.indexOf(item);
                    vm.items.splice(index, 1);
                }

                $scope.$on('searchTerm', function(event,term){
                    vm.searchItem = term;
                });

            }]
        });
})();