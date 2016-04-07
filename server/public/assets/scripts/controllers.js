myApp.controller("NightfallController", ["$scope", "$http", function($scope, $http){

  $scope.nightfallArray = [];

$scope.getNightfall = function() {
  $http.get('/nightfall').then(function(response){
    var results = response.data;
    console.log('*** RESULTS: ', results);
    $scope.nightfallArray = results;
  });
}

$scope.getNightfall();


}]);

myApp.controller("AddController", ["$scope", "HeroService", function($scope, HeroService){
    var heroObject = {};
    var heroService = HeroService;

    $scope.saveHero = function(data){
        heroService.postData(data);
        $scope.heroObject = {};
    }
}]);


myApp.controller("ShowController", ["$scope", "HeroService", function($scope, HeroService){
    var heroService = HeroService;

    heroService.getData();
    $scope.heroArray = heroService.heroData;

    $scope.deleteData = heroService.deleteData;
}]);
