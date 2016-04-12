myApp.factory("HeroService", ["$http", "$location", function($http, $location){
    var heroData = {};
    var favoritesData = {};
    var nightfallData = [];
    var vpointData = [];
    var playEpisode = {};
    var epName = "";

    //test variable
    var theUrl = "Nightfall_CBC_83-04-29_30_After_Sunset.mp3";


    //get data from button clicked on nightfall page
    var openEpisode = function(data){
        console.log(data);
        playEpisode = data;
        console.log(playEpisode);
        playEpisode.epName = data.name;
        console.log(playEpisode.epName);
        audioPage(playEpisode);
    };

    //redirect to audioplayer
    var audioPage = function(data){
      console.log(data, "in audiopage function");
      epName = data.name;
      console.log(epName);
      if(data !== null){
        $location.path("/audioplayer");
      };
    };

    var getNightfall = function() {
      $http.get('/nightfall').then(function(response){
        // console.log(response.data);
        nightfallData.allNightfall = response.data;
        // console.log(nightfallData.allNightfall);
      });
    };

    var getVpoint = function() {
      $http.get('/vpoint').then(function(response){
        vpointData.allVpoint = response.data;
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
      theUrl: theUrl,

      openEpisode: openEpisode,
      playEpisode: playEpisode,
      epName: epName,

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

myApp.factory("SweetFactory", function(){
   var something = "https://ia802707.us.archive.org/35/items/Nightfall-cbcRadioProgram-episodesMp3Format/Nightfall_CBC_80-10-10_15_Special_Services.mp3";

   return {
       something : something
   };
});

// myApp.factory("SweetFactory", function(){
//    var something = "";
//
//    return {
//        something : something
//    };
// });
