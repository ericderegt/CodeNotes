export default function ($scope, $rootScope, $http, $location, $modal, $log, CategoryService) {
  $scope.animationsEnabled = true;

// Load data when app launches
  CategoryService.query(function(data) {
    $scope.categories = data;
  });

// When new category has been submitted, reload data
  $scope.$on('newCategory:broadcast', function(event, data) {
    CategoryService.query(function(data) {
      $scope.categories = data;
    });
  });

// Toggle this on user login to determine whether or not to show Header on index.html
  $scope.userIsLoggedOut = true;

  $scope.$on('login', function(event, data) {
    $scope.userIsLoggedOut = false;
  });

  $scope.$on('logout', function(event, data) {
    $scope.userIsLoggedOut = true;
  });

  $scope.deleteCategory = function(catId) {
    CategoryService.delete({ id: catId });
    
    CategoryService.query(function(data) {
      $scope.categories = data;
    });
  };


// open methods below open and handle the four modals on the page.
// they are also broadcasting different events, which either reload data or change login status
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
      $log.info('Modal was dismissed at ' + new Date());
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
  };

  $scope.openRegister = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '../../views/modalRegister.html',
      controller: 'ModalInstanceCtrl',
      size: size,
    });

    modalInstance.result.then(function (newRegister) {
      $rootScope.$broadcast('login', 'logged in');
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.logout = function() {
    $http.get('/logout').
      then(function(response) {
        $rootScope.$broadcast('logout', 'logged out');
        $location.path('/');
      }, function(response) {
        // add error handling
      });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

  $scope.changeCategory = function(selectedCategory) {
    $scope.$broadcast('categoryChange', selectedCategory);
  };
};