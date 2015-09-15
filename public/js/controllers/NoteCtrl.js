export default function($scope, NoteService) {
  NoteService.query(function(data) {
    $scope.notes = data;
  });

  $scope.$on('newNote:broadcast', function(event, data) {
    NoteService.query(function(data) {
      $scope.notes = data;
    });
  });

  $scope.deleteNote = function(noteId) {
    NoteService.delete({ id: noteId });
    
    NoteService.query(function(data) {
      $scope.notes = data;
    });
  };

  $scope.categorySelected = '';

  $scope.$on('categoryChange', function(event, data) {
    $scope.categorySelected = data;
    console.log(data);
  });
};