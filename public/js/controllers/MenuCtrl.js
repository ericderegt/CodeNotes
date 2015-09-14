export default function ($scope, $rootScope, $modal, $log) {
  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '../../views/modalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
    });

    modalInstance.result.then(function (newNote) {
      $rootScope.$broadcast('newNote:broadcast', 'newNote!');
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
};