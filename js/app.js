var myapp = angular.module("myapp", []);
myapp.controller('ShopCtrl', ['$scope', 
function ShopCtrl($scope) {

    $scope.items = [
        {id: 1, text: 'Example: Bread', bought: false},
        {id: 2, text: 'Example: 1 Soy-Milk', bought: true},
        {id: 3, text: 'Example: 2 Carrots', bought: false}
    ];

    $scope.nextId = $scope.items.length + 1

    $scope.clearBought = function() {
        $scope.items = _.filter($scope.items, function(item) {
            return !item.bought;
        });
    }

    $scope.addItem = function() {
        $scope.items.push({text: $scope.itemEntry, bought: false, id: ($scope.nextId) });
        $scope.nextId++;
        $scope.itemEntry = '';
    }

    $scope.isBought = function(bought) {
        return (bought) ? 'bought' : 'not-bought';
    }
}
]);
