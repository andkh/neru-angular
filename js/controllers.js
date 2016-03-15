app.controller('CounterCtrl', function( $scope ) {
    $scope.quantity = 2;

});

app.controller('CheckboxCtrl', function($scope) {
    $scope.roles = [
        {id: 1, text: 'Школы, лицеи, гимназии'},
        {id: 2, text: 'Школы, лицеи, гимназии'}
    ];
    $scope.user = {
        roles: [$scope.roles[0]]
    };
    $scope.selectedUsers = $scope.user.roles;

    $scope.compareFn = function(obj1, obj2){
        return obj1.id === obj2.id;
    };
});

app.controller("NavCtrl", function($scope, $location) {
    $scope.menuClass = function(page) {
        var current = $location.path().substring(1);
        return page === current ? "active" : "";
    };
});