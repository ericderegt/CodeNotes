export default function($resource) {
  return $resource('api/categories/:id', {id:'@id'});
};