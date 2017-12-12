angular
    .module("myApp",["ngMaterial","ui.router"])
    .config(function( $stateProvider, $locationProvider){
        $locationProvider.hashPrefix('');
        $stateProvider
        .state('home',{
            url: '/',
            template:'<home-view></home-view>'
        })
        .state('about',{
            url: '/about',
            template:'<h1>about</h1><md-button ui-sref="about.more">go to nested state</md-button><ui-view></ui-view>'
        })
        .state('about.more',{
            url: '/more',
            template: '<p>deeper state</p>'
        });
    });
