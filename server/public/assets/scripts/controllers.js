myApp.controller('AddController', ['$scope', 'PetService', function($scope, PetService){
    var petObject = {};
    var petService = PetService;

    //POST HERE
    $scope.submit = function(data){
      petService.postData(data);
    };
}]);

myApp.controller('ViewController', ['$scope', 'PetService', function($scope, PetService){
    var petService = PetService;

    //GET HERE
    petService.getData();
    $scope.petArray = petService.petData;

}]);
