myApp.factory('PetService', ['$http', function($http){
    var data = {};
    var getData = function(){
      $http.get('/pets').then(function(response){
        console.log(response.data);
      });
    };

    var postData = function(data){
      $http.post('/pets').then(function(response){
        console.log(response.data);
      });
    };

    return {
      postData: postData,
      getData: getData,
      data: data
    };
}]);
