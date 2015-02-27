angular.module('app', ['ngNewRouter']).

controller('AppController', ['$router', function AppController($router) {
  $router.config([
    { path: '/', redirectTo: '/home' },
    { path: '/home', component: 'home'}
  ]);
}]);
