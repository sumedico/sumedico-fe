var app = angular.module('suMedicoApp',["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
            .when("/", {
                /*controller: "evalIntegradoraController",*/
                controllerAs: "vm",
                templateUrl: "vistas/home-medico.html"
            })
            .when("/atender", {
                //controller: "productosController",
                controllerAs: "vm",
                templateUrl: "vistas/medico/atender.html"
            })
            .when("/misturnos", {
                //controller: "contactoController",
                controllerAs: "vm",
                templateUrl: "vistas/medico/misturnos-grid.html"
            })
            .when("/historias",{
                controllerAs: "vm",
                templateUrl: "vistas/medico/historias.html"
            });

    });