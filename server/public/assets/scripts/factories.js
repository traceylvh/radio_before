myApp.factory("HeroService", ["$http", function($http){
    var heroData = {};
    var favoritesData = {};

    var getData = function(){
        $http.get("/userInfo").then(function(response){
          console.log(response.data);
          heroData.allHeroes = response.data;
          console.log(heroData.allHeroes);
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
          console.log(response.data);
          favoritesData.allFavorites = response.data;
          console.log(favoritesData.allFavorites);
        });
    };

    var postFavData = function(data){
        $http.post("/favorites", data).then(function(response){
          console.log("here is the", response.data);
          getFavData();
        });
    };

    var deleteData = function(data){
      $http.delete("/userInfo/" + data).then(function(response){
        getData();
      });
    };


    return {
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
