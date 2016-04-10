myApp.controller("NightfallController", ["$scope", "HeroService", "$http", "$location",
function($scope, HeroService, $http, $location){

  var heroService = HeroService;

  $scope.nightfallArray = [];
  $scope.epName = "";
  $scope.favoritesArray = [];

$scope.getNightfall = function() {
  $http.get('/nightfall').then(function(response){
    var results = response.data;
    // console.log('*** RESULTS: ', results);
    $scope.nightfallArray = results;

  });
};

$scope.getNightfall();

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
    $scope.epName = data;
    // console.log($scope.epName, "it works here");
  };
};

// $scope.addFavorite = function(data){
//   $scope.favoriteArray.push(data);
//   console.log($scope.favoriteArray);
// };

$scope.saveFavorite = function(data){
    heroService.postFavData(data);
}

$scope.addFavorite = function() {
  $http.get('/favorites').then(function(response){
    var results = response.data;
    console.log('*** RESULTS: ', results);
    $scope.favoritesArray = results;
  });
};

$scope.addFavorite();



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
