angular.module('app', ['ngFuturisticRouter']).

controller('AppController', function AppController(router) {
  router.config([
    { path: '/', redirectTo: '/home' },
    { path: '/home', component: 'home'}
  ]);
});
