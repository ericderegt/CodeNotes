export default function ($scope, $rootScope, $modal, $log, CategoryService) {
  $scope.animationsEnabled = true;

  CategoryService.query(function(data) {
    $scope.categories = data;
  });

// When new category has been submitted, reload data
  $scope.$on('newCategory:broadcast', function(event, data) {
    CategoryService.query(function(data) {
      $scope.categories = data;
    });
  });

  $scope.deleteCategory = function(catId) {
    CategoryService.delete({ id: catId });
    
    CategoryService.query(function(data) {
      $scope.categories = data;
    });
  };

  $scope.openNote = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '../../views/modalNote.html',
      controller: 'ModalInstanceCtrl',
      size: size,
    });

    modalInstance.result.then(function (newNote) {
      $rootScope.$broadcast('newNote:broadcast', 'newNote!');
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openCategory = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '../../views/modalCategory.html',
      controller: 'ModalInstanceCtrl',
      size: size,
    });

    modalInstance.result.then(function (newNote) {
      $rootScope.$broadcast('newCategory:broadcast', 'newCategory!');
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openLogin = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '../../views/modalLogin.html',
      controller: 'ModalInstanceCtrl',
      size: size,
    });

    modalInstance.result.then(function (newLogin) {
      // $rootScope.$broadcast('newCategory:broadcast', 'newCategory!');
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openRegister = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '../../views/modalRegister.html',
      controller: 'ModalInstanceCtrl',
      size: size,
    });

    modalInstance.result.then(function (newRegister) {
      // $rootScope.$broadcast('newCategory:broadcast', 'newCategory!');
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };



  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

  $scope.changeCategory = function(selectedCategory) {
    $scope.$broadcast('categoryChange', selectedCategory);
  };

// Toggle this on user login to determine whether or not to show Header on index.html
  $scope.userIsLoggedOut = true;
};