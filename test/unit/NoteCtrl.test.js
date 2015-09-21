describe('NoteCtrl', function(){
  beforeEach(module('codeNotes'));

  var $controller, $scope;

  beforeEach(inject(function(_$controller_, _$rootScope_){
    $controller = _$controller_;
    $scope = _$rootScope_.$new();
  }));

  describe('display notes', function(){
    it('should display notes correctly', function() {

      var noteController = $controller('NoteCtrl', {$scope: $scope});

      expect(noteController).toBeDefined();
    });
  });
});