var app = angular.module('suMedicoApp',["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
            .when("/", {
                /*controller: "evalIntegradoraController",*/
                controllerAs: "vm",
                templateUrl: "vistas/home.html"
            })
            .when("/asistencia", {
                //controller: "productosController",
                controllerAs: "vm",
                templateUrl: "vistas/turnos/asistencia.html"
            })
            .when("/reserva", {
                //controller: "serviciosController",
                controllerAs: "vm",
                templateUrl: "vistas/turnos/reserva/index.html"
            })
            .when("/misturnos", {
                //controller: "contactoController",
                controllerAs: "vm",
                templateUrl: "vistas/turnos/misturnos.html"
            })
            .when("/turnos/reservados",{
                controllerAs: "vm",
                templateUrl: "vistas/turnos/reservados.html"
            })
            .when("/turnos/anteriores",{
            controllerAs: "vm",
            templateUrl: "vistas/turnos/anteriores.html"
            })
            .when("/turnos/grilla",{
                controllerAs: "vm",
                templateUrl: "vistas/turnos/misturnos-grid.html"
            })
            .when("/turnos/reserva/normal",{
                controllerAs: "vm",
                templateUrl: "vistas/turnos/reserva/normal.html"
            })
            .when("/turnos/reserva/rapida",{
                controllerAs: "vm",
                templateUrl: "vistas/turnos/reserva/rapida.html"
            })
            .when("/turnos/reserva/cercana",{
                controllerAs: "vm",
                templateUrl: "vistas/turnos/reserva/cercana.html"
            });

    });