angular
    .module("ngClassifieds",["ngMaterial","ui.router"])
    .config(function($mdThemingProvider, $stateProvider, $locationProvider){
        $mdThemingProvider
            .theme('default')
            .primaryPalette('teal')
            .accentPalette('orange');
        $locationProvider.hashPrefix('');
        $stateProvider
        .state('one',{
            url: '/stateone',
            template:'<h1>state one</h1>'
        })
        .state('two',{
            url: '/statetwo',
            template:'<h1>state two</h1><md-button ui-sref="two.more">go to nested state</md-button><ui-view></ui-view>'
        })
        .state('two.more',{
            url: '/more',
            template: '<p>deeper state</p>'
        });
    })
    .directive("helloWorld",function(){
        return {
            template: "<h1>{{message}}</h1>"
        }

        
    });
