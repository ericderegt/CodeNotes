export default function ($scope, $http, $rootScope, $modalInstance, NoteService, CategoryService) {
  $scope.note = new NoteService();
  $scope.category = new CategoryService();
  $scope.user = {};

  CategoryService.query(function(data) {
    $scope.categories = data;
  });

  $scope.submitNote = function () {
    $scope.note.$save(function() {
      $modalInstance.close('close modal');
    });
  };

  $scope.submitCategory = function () {
    $scope.category.$save(function() {
      $msodalInstance.close('close modal');
    });
  };

// NEED TO UPDATE THESE TWO METHODS
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

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};