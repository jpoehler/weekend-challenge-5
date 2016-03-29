myApp.factory('PetService', ['$http', function($http){
    var info = {};

    var getData = function(){
      $http.get('/pets').then(function(response){
        info.results = response.data;
        console.log("Here: ", info);

      });
    };

    var postData = function(data){
      $http.post('/pets', data).then(function(response){
        console.log(response.data);
        getData();
      });
    };

    return {
      postData: postData,
      getData: getData,
      info: info
    };
}]);
