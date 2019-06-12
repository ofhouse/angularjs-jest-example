// Taken from: https://docs.angularjs.org/api/ngMock/service/$httpBackend
// The controller code
export function MyController($scope, $http) {
  var authToken;

  $http
    .get('/auth.py')
    .then(function(response) {
      authToken = response.headers('A-Token');
      $scope.user = response.data;
    })
    .catch(function() {
      $scope.status = 'Failed...';
    });

  $scope.saveMessage = function(message) {
    var headers = { Authorization: authToken };
    $scope.status = 'Saving...';

    $http
      .post('/add-msg.py', message, { headers: headers })
      .then(function(response) {
        $scope.status = '';
      })
      .catch(function() {
        $scope.status = 'Failed...';
      });
  };
}
