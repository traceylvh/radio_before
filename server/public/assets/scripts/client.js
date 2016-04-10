var myApp = angular.module("myApp", ["ngRoute"]);

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
      .otherwise({
          redirectTo: "/home"
      });
}]);
