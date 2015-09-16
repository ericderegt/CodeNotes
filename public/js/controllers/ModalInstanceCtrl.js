export default function ($scope, $modalInstance, NoteService, CategoryService) {
  $scope.note = new NoteService();
  $scope.category = new CategoryService();

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
      $modalInstance.close('close modal');
    });
  };

// NEED TO UPDATE THESE TWO METHODS
  $scope.submitLogin = function () {
    $modalInstance.dismiss('cancel');
    console.log('login');
  };

  $scope.submitRegister = function () {
    $modalInstance.dismiss('cancel');
    console.log('register');
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};