export default function($scope, NoteService) {
  NoteService.query(function(data) {
    $scope.notes = data;
  });

  $scope.test = 'huh';
};