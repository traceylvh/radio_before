
myApp.controller("EpisodeController", ["$scope", "HeroService", "$http", "$location",
function($scope, HeroService, $http, $location){

  var heroService = HeroService;

  heroService.getNightfall();
  $scope.nightfallArray = heroService.nightfallData;

  heroService.getVpoint();
  $scope.vpointArray = heroService.vpointData;

//get data from button clicked on nightfall page
$scope.openEpisode = function(data){
  // console.log("url ", data);
  $scope.epName = data.name;
  console.log($scope.epName);

  $scope.audioPage($scope.epName);
};

//redirect to audioplayer
$scope.audioPage = function(data){
  if(data !== null){
    $location.path("/audioplayer");
    // console.log(data);
    // $scope.epName = data;
    console.log($scope.epName, "it works here");
  };
};

//updated save fav
var favObject = {};

$scope.saveFavorite = function(data){
    heroService.postFavData(data);
}

heroService.getFavData();

$scope.favoritesArray = heroService.favoritesData;

//delete favorite
$scope.deleteData = heroService.deleteData;

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
