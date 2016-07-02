/**
 * Created by germanb on 02/07/16.
 */
app.controller('turnosController', ['$scope','$http', function (scope,http) {

    http.get("http://localhost:8080/especialidadMedica.json").success(function (response) {
        scope.especialidades=response;
    })
}]);
