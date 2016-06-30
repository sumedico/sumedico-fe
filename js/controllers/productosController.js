app.controller('productosController', ['$scope','$http', function (scope,http) {

    http.get("data/productos.json").success(function (response) {
        scope.productos=response;
    })
}]);
