var myApp = angular.module("myApp", ["ngRoute", "ngSanitize"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider
      .when("/home", {
          templateUrl: "/assets/views/routes/home.html",
      })
      .when("/userInfoAdd", {
          templateUrl: "/assets/views/routes/userInfoAdd.html",
          controller: "AddController"
      })
      .when("/view", {
          templateUrl: "/assets/views/routes/view.html",
          controller: "ShowController"
      })
      .when("/nightfall", {
          templateUrl: "/assets/views/routes/nightfall.html",
          controller: "EpisodeController"
      })
      .when("/vpoint", {
          templateUrl: "/assets/views/routes/vpoint.html",
          controller: "EpisodeController"
      })
      .when("/favorites", {
          templateUrl: "/assets/views/routes/favorites.html",
          controller: "EpisodeController"
      })
      .when("/audioplayer", {
          templateUrl: "/assets/views/routes/audioplayer.html",
          controller: "EpisodeController"
      })
      .when("/episode", {
          templateUrl: "/assets/views/routes/episode.html",
          controller: "DummyController"
      })
      .otherwise({
          redirectTo: "/home"
      });

  }]);

// myApp.filter('trustUrl', ['$sce', function ($sce) {
//   return function(url) {
//     return $sce.trustAsResourceUrl(url);
//   };
// }]);

angular.module('myApp')
  .filter('trustUrl', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });


// myApp.config(["$sceDelegateProvider", function($sceDelegateProvider){
//     $sceDelegateProvider.resourceUrlWhitelist([
//       // Allow same origin resource loads.
//       'self',
//       // Allow loading from our assets domain.  Notice the difference between * and **.
//       'https://ia802707.us.archive.org/35/items/Nightfall-cbcRadioProgram-episodesMp3Format/**']);
//     });
