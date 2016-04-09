myApp.controller("NightfallController", ["$scope", "HeroService", "$http", "$location",
function($scope, HeroService, $http, $location){

  var heroService = HeroService;

  $scope.nightfallArray = [];

$scope.getNightfall = function() {
  $http.get('/nightfall').then(function(response){
    var results = response.data;
    // console.log('*** RESULTS: ', results);
    $scope.nightfallArray = results;

    // //get data from button clicked on nightfall page
    $scope.openEpisode = function(data){
      console.log("url/" + data.name);
      // var epName = data.name;
      // $scope.data = data;
      // console.log($scope.data);

      //redirect to audioplayer
      if(data.name !== null){
        $location.path("/audioplayer");
      };


    };

  });
}


$scope.getNightfall();

//this function is for audioplayer
audiojs.events.ready(function() {
    var as = audiojs.createAll();
});


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
