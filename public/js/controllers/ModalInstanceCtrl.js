export default function ($scope, $modalInstance, NoteService) {
  $scope.note = new NoteService();

  $scope.submit = function () {
    $scope.note.$save(function() {
      $modalInstance.close('closed');
    });
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};