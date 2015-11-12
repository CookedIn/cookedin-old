describe('Routing', function () {
  var $route;
  beforeEach(module('cookedin'));

  beforeEach(inject(function ($injector) {
    $route = $injector.get('$route');
  }));

  it('Should have /signup route, template, and controller', function () {
    expect($route.routes['/signup']).to.be.ok();
    expect($route.routes['/signup'].controller).to.be('AuthController');
    expect($route.routes['/signup'].templateUrl).to.be('app/auth/createAccount.html');
  });

  it('Should have /signin route, template, and controller', function () {
    expect($route.routes['/signin']).to.be.ok();
    expect($route.routes['/signin'].controller).to.be('AuthController');
    expect($route.routes['/signin'].templateUrl).to.be('app/auth/login.html');
  });

});
