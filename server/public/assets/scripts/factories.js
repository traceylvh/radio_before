myApp.factory("HeroService", ["$http", "$location", function($http, $location){
    var heroData = {};
    var favoritesData = {};
    var nightfallData = [];
    var vpointData = [];
    var playEpisode = {};
    var epName = "";
    var urlStart = "https://ia802707.us.archive.org/35/items/Nightfall-cbcRadioProgram-episodesMp3Format/";
    var episodeURL = "";

    //test variable
    var theUrl = "Nightfall_CBC_83-04-29_30_After_Sunset.mp3";


    //get data from button clicked on nightfall page
    var openEpisode = function(data){
        console.log('openEpisode data ', data);
        playEpisode.data = data;
        console.log('playEpisode object ', playEpisode);
        console.log('playEpisode.data.name: ', playEpisode.data.name);
        epName = playEpisode.data.name;
        audioPage(playEpisode);
        createURL();
    };

    //redirect to audioplayer
    var audioPage = function(data){
      if(data !== null){
        $location.path("/audioplayer");
      };
    };

    //create URL to episode
    var createURL = function(){
      console.log(playEpisode.data.name);
      // episodeURL = urlStart + playEpisode.data.name;
      playEpisode.episodeURL = urlStart + playEpisode.data.name;
      console.log('episodeURL ', episodeURL);
    }

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
      episodeURL: episodeURL,
      createURL: createURL,

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
