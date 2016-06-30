/**
 * Created by germanb on 17/05/16.
 */
app.controller('contactoController', ['$scope','$http', function ($scope,$http) {
    $scope.contact = {};
    $scope.thankyou = "";
    $scope.enviar = function () {
        $http.post("mail.php",$scope.contact).success(function (resp) {
            console.log(resp);
            $scope.thankyou= "Gracias por contactarnos!";
        });
    }
}]);
