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
      .otherwise({
          redirectTo: "/home"
      });
}]);