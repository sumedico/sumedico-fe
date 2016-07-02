var app = angular.module('suMedicoApp',["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
            .when("/", {
                /*controller: "evalIntegradoraController",*/
                controllerAs: "vm",
                templateUrl: "vistas/home-recepcion.html"
            })
            .when("/pacientes/alta", {
                controller: "altaController",
                controllerAs: "vm",
                templateUrl: "vistas/recepcion/registrar.html"
            })
            .when("/pacientes/alta/pin", {
                controller: "pinController",
                controllerAs: "vm",
                templateUrl: "vistas/recepcion/pin.html"
            })
            .when("/pacientes/recepcion", {
                controller: "altaController",
                controllerAs: "vm",
                templateUrl: "vistas/recepcion/recepcion.html"
            })
            .when("/pacientes/recepcion/detalle", {
                controller: "detalleController",
                controllerAs: "vm",
                templateUrl: "vistas/recepcion/detalle.html"
            })
            .when("/turnos",{
                controllerAs: "vm",
                templateUrl: "vistas/turnos/reserva/normal.html"
            }).when("/sinturno",{
                controllerAs: "vm",
                controller: "sinturnoController",
                templateUrl: "vistas/recepcion/sinturno.html"
        }   );


    });

app.factory("paciente",function(){
    rst = function (){
        this.cuil=111111111;
        this.nombre="Alberto Gomez"
    }

    if(typeof this.nombre === "undefined") rst();

    return {
        reset: rst
    };
});

app.controller('altaController', ['$scope', '$location', 'paciente', function($scope,$location,paciente) {
    $scope.paciente = paciente;
    $scope.fecha = new Date();
    $scope.pin = Math.round(Math.random()*10000);
    $scope.consultorio = Math.round(Math.random()*100);
    $scope.profesional = "Juan Perez";

    paciente.reset();

    $scope.update = function (paciente) {
        $scope.paciente = angular.copy(paciente);
        $location.url("pacientes/alta/pin");
    }
}]);

app.controller('pinController',['$scope', '$location', 'paciente', function($scope,$location,paciente) {
    $scope.paciente = paciente;
    $scope.fecha = new Date();
    $scope.pin = Math.round(Math.random()*10000);
    $scope.consultorio = Math.round(Math.random()*100);
    $scope.profesional = "Juan Perez";

}]);

app.controller('detalleController',['$scope', '$location', 'paciente', function($scope,$location,paciente) {
    $scope.paciente = paciente;
    $scope.fecha = new Date();
    $scope.pin = Math.round(Math.random()*10000);
    $scope.consultorio = Math.round(Math.random()*100);
    $scope.profesional = "Juan Perez";

}]);

app.controller('sinturnoController', ['$scope', '$location', 'paciente', function($scope,$location,paciente) {
    $scope.paciente = paciente;
    $scope.fecha = new Date();
    $scope.pin = Math.round(Math.random()*10000);
    $scope.consultorio = Math.round(Math.random()*100);
    $scope.profesional = "Juan Perez";

    paciente.reset();

    $scope.update = function (paciente) {
        $scope.paciente = angular.copy(paciente);
        $location.url("pacientes/recepcion/detalle");
    }
}]);