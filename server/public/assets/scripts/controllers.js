
myApp.controller("EpisodeController", ["$scope", "HeroService", "$http", "$location",
function($scope, HeroService, $http, $location){

  var heroService = HeroService;

  heroService.getNightfall();
  $scope.nightfallArray = heroService.nightfallData;

  heroService.getVpoint();
  $scope.vpointArray = heroService.vpointData;

  // heroService.openEpisode();
  // $scope.episodePick = heroService.playEpisode;

$scope.openEpisode = function(data){
  heroService.openEpisode(data);
    $scope.episodePick = heroService.playEpisode;
    console.log("in controller function", $scope.episodePick);
  // $scope.epName = $scope.episodePick.name;
  $scope.audioPage($scope.episodePick);
};

$scope.episodePick = heroService.playEpisode;

// //redirect to audioplayer
$scope.audioPage = function(data){
  console.log(data, "in audiopage function");
  if(data !== null){
    $location.path("/audioplayer");
    // console.log(data);
    // $scope.epName = data;
    console.log($scope.episodePick, "it works here");
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
