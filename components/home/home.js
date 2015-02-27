angular.module('app').controller('HomeController', ['$router', function HomeController($router) {
  this.name = "Home";

  $router.config([
    { path: '/one', component: 'one' },
    { path: '/two', component: 'two' }
  ]);
}]);
