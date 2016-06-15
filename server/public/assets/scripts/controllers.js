myApp.controller('AddController', ['$scope', 'PetService', function($scope, PetService){
    var petObject = {};
    var petService = PetService;

    //POST HERE
    $scope.submit = function(data){
      petService.postData(data);
      window.location = '/#/view';
    };

}]);

myApp.controller('ViewController', ['$scope', 'PetService', function($scope, PetService){
    var petService = PetService;

    //GET HERE
    petService.getData();
    $scope.info = petService.info;

    $scope.remove = function(index) {
      $scope.info.results.splice(index, 1);
    };

}]);
