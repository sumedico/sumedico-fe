var app = angular.module('suMedicoApp',["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
            .when("/", {
                /*controller: "evalIntegradoraController",*/
                controllerAs: "vm",
                templateUrl: "vistas/home-paciente.html"
            })
            .when("/asistencia", {
                //controller: "productosController",
                controllerAs: "vm",
                templateUrl: "vistas/turnos/asistencia.html"
            })
            .when("/reserva", {
                controller: "turnosController",
                controllerAs: "vm",
                templateUrl: "vistas/turnos/reserva/index.html"
            })
            .when("/misturnos", {
                controller: "turnosController",
                controllerAs: "vm",
                templateUrl: "vistas/turnos/misturnos.html"
            })
            .when("/turnos/reservados",{
                controller: "turnosController",
                controllerAs: "vm",
                templateUrl: "vistas/turnos/reservados.html"
            })
            .when("/turnos/anteriores",{
                controller: "turnosController",
                controllerAs: "vm",
                templateUrl: "vistas/turnos/anteriores.html"
            })
            .when("/turnos/grilla",{
                controller: "turnosController",
                controllerAs: "vm",
                templateUrl: "vistas/turnos/misturnos-grid.html"
            })
            .when("/turnos/reserva/normal",{
                controller: "turnosController",
                controllerAs: "vm",
                templateUrl: "vistas/turnos/reserva/normal.html"
            })
            .when("/turnos/reserva/rapida",{
                controller: "turnosController",
                controllerAs: "vm",
                templateUrl: "vistas/turnos/reserva/rapida.html"
            })
            .when("/turnos/reserva/cercana",{
                controller: "turnosController",
                controllerAs: "vm",
                templateUrl: "vistas/turnos/reserva/cercana.html"
            });

    });