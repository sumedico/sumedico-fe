var app = angular.module('suMedicoApp',["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
            .when("/", {
                /*controller: "evalIntegradoraController",*/
                controllerAs: "vm",
                templateUrl: "vistas/home-recepcion.html"
            })
            .when("/pacientes/alta", {
                //controller: "productosController",
                controllerAs: "vm",
                templateUrl: "vistas/recepcion/registrar.html"
            })
            .when("/pacientes/recepcion", {
                //controller: "contactoController",
                controllerAs: "vm",
                templateUrl: "vistas/recepcion/recepcion.html"
            })
            .when("/turnos",{
                controllerAs: "vm",
                templateUrl: "vistas/turnos/reserva/normal.html"
            }).when("/sinturno",{
                controllerAs: "vm",
                templateUrl: "vistas/recepcion/sinturno.html"
        }   );


    });