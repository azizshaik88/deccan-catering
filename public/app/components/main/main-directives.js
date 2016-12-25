app.directive('sideBarMenu', function () {

    var sideBarController = function sideBarController() {
        
    };
    
    return {
        restrict: 'EA',
        templateUrl: '/app/components/main/side-bar-menu.html',
        controller: sideBarController
    };
});



app.directive('slideshow', function() {
    
    var slideshowController = function($scope) {
          $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        
          $scope.slides = [
            {
              image: '/img/biryani.jpg'
            },
            {
              image: '/img/roasted_tandoori_chicken_closeup.jpg'
            },
            {
              image: '/img/white_rice_and_chicken_curry.jpg'
            },
            {
              image: '/img/lamb_biryani_big.jpg'
            },  
            {
              image: '/img/yellow_rice_and_minced_meat.jpg'
            },
            {
              image: '/img/baghare_baigan.jpg'
            },
            {
              image: '/img/biryani_multiple.jpg'
            },
              
          ];
    };
    
    return {
        restrict: 'EA',
        controller: slideshowController
    }
    
});