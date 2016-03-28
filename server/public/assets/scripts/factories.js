myApp.factory('PetService', ['$http', function($http){
    var petData = {};

    var getData = function(){
      $http.get('/pets').then(function(response){
        console.log(response.data);
        petData.pets = response.data;
        console.log(petData);
        return petData.pets;
      });
    };

    var postData = function(data){
      $http.post('/pets', data).then(function(response){
        console.log(response.data);
      });
    };

    return {
      postData: postData,
      getData: getData,
      petData: petData
    };
}]);
