mainApp.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/main');
    
    $stateProvider
        
        .state('main', {
            url:'/main',
            templateUrl:'app/components/main/main.html'
        });
});