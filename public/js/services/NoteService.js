export default function($resource) {
  return $resource('api/notes/:id', {id:'@id'});
};