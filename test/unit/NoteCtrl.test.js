describe('NoteCtrl', function(){
  beforeEach(module('codeNotes'));

  describe('display notes', function(){
    it('should display notes correctly', inject(function($controller){
      var noteController = $controller('NoteCtrl');

      expect(noteController).toBeDefined();
    }));
  });
});