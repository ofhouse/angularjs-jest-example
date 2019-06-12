// Taken from: https://docs.angularjs.org/api/ngMock/service/$httpBackend
// testing controller
describe('MyController', function() {
  let $httpBackend;
  let $rootScope;
  let createController;
  let authRequestHandler;

  // Set up the module
  beforeEach(angular.mock.module('myApp'));

  beforeEach(inject(function(_$httpBackend_, _$rootScope_, _$controller_) {
    // Set up the mock http service responses
    $httpBackend = _$httpBackend_;
    // backend definition common for all tests
    authRequestHandler = $httpBackend
      .when('GET', '/auth.py')
      .respond({ userId: 'userX' }, { 'A-Token': 'xxx' });

    $rootScope = _$rootScope_;
    var $controller = _$controller_;

    createController = function() {
      return $controller('MyController', { $scope: $rootScope });
    };
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch authentication token', function() {
    $httpBackend.expectGET('/auth.py');
    var controller = createController();
    $httpBackend.flush();
  });

  it('should fail authentication', function() {
    // Notice how you can change the response even after it was set
    authRequestHandler.respond(401, '');

    $httpBackend.expectGET('/auth.py');
    var controller = createController();
    $httpBackend.flush();
    expect($rootScope.status).toBe('Failed...');
  });

  it('should send msg to server', function() {
    var controller = createController();
    // $httpBackend.flush();

    // now you don’t care about the authentication, but
    // the controller will still send the request and
    // $httpBackend will respond without you having to
    // specify the expectation and response for this request

    $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
    $rootScope.saveMessage('message content');
    expect($rootScope.status).toBe('Saving...');
    $httpBackend.flush();
    expect($rootScope.status).toBe('');
  });

  it('should send auth header', function() {
    var controller = createController();
    $httpBackend.flush();

    $httpBackend
      .expectPOST('/add-msg.py', undefined, function(headers) {
        // check if the header was sent, if it wasn't the expectation won't
        // match the request and the test will fail
        return headers['Authorization'] === 'xxx';
      })
      .respond(201, '');

    $rootScope.saveMessage('whatever');
    $httpBackend.flush();
  });
});
