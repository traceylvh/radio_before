


myApp.factory("HeroService", ["$http", function($http){
    var heroData = {};

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

    var deleteData = function(data){
      $http.delete("/userInfo/" + data).then(function(response){
        getData();
      });
    };

    return {
      postData: postData,
      getData: getData,
      heroData: heroData,
      deleteData: deleteData
    };
}]);
