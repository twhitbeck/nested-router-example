angular.module('app').controller('OneController', ['$router', function OneController($router) {
  this.stuff = 'toot';

  $router.config([
    { path: '/a', component: 'a' }
  ]);
}]);
