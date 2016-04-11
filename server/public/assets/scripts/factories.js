myApp.factory("HeroService", ["$http", function($http){
    var heroData = {};
    var favoritesData = {};
    var nightfallData = [];
    var vpointData = [];
    var playEpisode = {};


    //get data from button clicked on nightfall page
    var openEpisode = function(data){
        console.log(data);
        playEpisode.epName = data.name;
        console.log(playEpisode);

      // $scope.epName = data.name;
      // console.log($scope.epName);
      //
      // $scope.audioPage($scope.epName);
    };

    //redirect to audioplayer
    // $scope.audioPage = function(data){
    //   if(data !== null){
    //     $location.path("/audioplayer");
    //     // console.log(data);
    //     // $scope.epName = data;
    //     console.log($scope.epName, "it works here");
    //   };
    // };

    var getNightfall = function() {
      $http.get('/nightfall').then(function(response){
        // console.log(response.data);
        nightfallData.allNightfall = response.data;
        // console.log(nightfallData.allNightfall);
        // $scope.nightfallArray = results;
      });
    };

    var getVpoint = function() {
      $http.get('/vpoint').then(function(response){
        // console.log(response.data);
        vpointData.allVpoint = response.data;
        // console.log(nightfallData.allNightfall);
        // $scope.nightfallArray = results;
      });
    };

    var getData = function(){
        $http.get("/userInfo").then(function(response){
          // console.log(response.data);
          heroData.allHeroes = response.data;
          // console.log(heroData.allHeroes);
        });
    };

    var postData = function(data){
        $http.post("/userInfo", data).then(function(response){
          console.log("here is the", response.data);
          getData();
        });
    };

    var getFavData = function(){
        $http.get("/favorites").then(function(response){
          // console.log(response.data);
          favoritesData.allFavorites = response.data;
          // console.log(favoritesData.allFavorites);
        });
    };

    var postFavData = function(data){
        $http.post("/favorites", data).then(function(response){
          console.log("here is the", response.data);
          getFavData();
        });
    };

    var deleteData = function(data){
      $http.delete("/favorites/" + data).then(function(response){
        getFavData();
      });
    };


    return {
      openEpisode: openEpisode,
      playEpisode: playEpisode,

      getNightfall: getNightfall,
      nightfallData: nightfallData,

      getVpoint: getVpoint,
      vpointData: vpointData,

      postData: postData,
      getData: getData,

      postFavData: postFavData,
      getFavData: getFavData,

      favoritesData: favoritesData,

      heroData: heroData,

      deleteData: deleteData,
      // episodeData: episodeData
    };
}]);
