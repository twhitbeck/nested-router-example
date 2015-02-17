angular.module('app').controller('HomeController', function HomeController(router) {
  this.name = "Home";

  router.config([
    { path: '/one', component: 'one' },
    { path: '/two', component: 'two' }
  ]);
});
