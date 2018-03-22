angular.module('app').controller('mainCtrl', function($scope, $interval) {
    $scope.name = "Tyrone";
    $scope.time = new Date().toString();
    $scope.startTime = function() {
        $interval(() => {
            $scope.time = new Date().toString();
        }, 1000);
    };
});