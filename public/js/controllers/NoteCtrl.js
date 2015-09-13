export default function($scope, NoteService) {
  NoteService.query(function(data) {
    $scope.notes = data;
  });

  $scope.deleteNote = function(noteId) {
    NoteService.delete({ id: noteId });
    
    NoteService.query(function(data) {
      $scope.notes = data;
    });
  };
};