export default function ($scope, $http, $rootScope, $modalInstance, NoteService, CategoryService) {
  $scope.note = new NoteService();
  $scope.category = new CategoryService();
  $scope.user = {};

  CategoryService.query(function(data) {
    $scope.categories = data;
  });

// these methods communicate post requests to server for notes, categories, and users
  $scope.submitNote = function () {
    $scope.note.$save(function() {
      $modalInstance.close('close modal');
    });
  };

  $scope.submitCategory = function () {
    $scope.category.$save(function() {
      $modalInstance.close('close modal');
    });
  };

  $scope.submitLogin = function () {
    $http.post('/login', $scope.user).
      then(function(response) {
        $rootScope.$broadcast('login', 'logged in');
        $modalInstance.close('close modal');
      }, function(response) {
        $modalInstance.close('close modal');
      });
  };

  $scope.submitRegister = function () {
    $http.post('/register', $scope.user).
      then(function(response) {
        $modalInstance.close('close modal');
      }, function(response) {
        $modalInstance.close('close modal');
      });
  };

// dismiss modal when user clicks canel
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};