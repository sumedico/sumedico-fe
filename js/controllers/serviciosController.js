app.controller('serviciosController', ['$scope','$http', function (scope,http) {

    http.get("data/servicios.json").success(function (response) {
        scope.servicios=response;
    })
}]);
