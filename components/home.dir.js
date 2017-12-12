(function() {
    "use strict";

    angular
        .module("myApp")
        .component('homeView', {
            templateUrl: 'components/views/home.tpl.html',
            controller: ['myFactory',function(myFactory){
                var vm = this;
                vm.deleteItem = deleteItem;
                myFactory.getData().then(function(response){
                    vm.items = response.data;
                });

                function deleteItem(item){
                    var index = vm.items.indexOf(item);
                    vm.items.splice(index, 1);
                }

            }]
        });
})();