export default function($scope, NoteService) {
// load data initially
  NoteService.query(function(data) {
    $scope.notes = data;
  });

// reload data on form submission
  $scope.$on('newNote:broadcast', function(event, data) {
    NoteService.query(function(data) {
      $scope.notes = data;
    });
  });

// delete note, reload data
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