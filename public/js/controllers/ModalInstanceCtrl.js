export default function ($scope, $modalInstance, NoteService, CategoryService) {
  $scope.note = new NoteService();
  $scope.category = new CategoryService();

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

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};