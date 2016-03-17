app.directive('regionchoice', function () {
    return {
        restrict: 'AE',
        templateUrl: 'region-choice.html',
        link: function ($scope, element) {
            $scope.openSelect = openSelect;
            $scope.showTown = showTown;
            $scope.changeRegion = changeRegion;
            $scope.addText = addText;
            $scope.searchAll = searchAll;
            $scope.copyObj = {};
            $scope.formedText = '';
            $scope.flag = false;
            $scope.firstStep = false;
            $scope.secondStep = false;

            element.parent().addClass('close');

            function openSelect() {
                if($scope.secondStep === true || $scope.formedText.length > 0) {
                    $scope.flag = true;
                    showTown($scope.copyObj);
                } else {
                    $scope.flag = true;
                    $scope.firstStep = true;
                }
            }

            function showTown(city) {
                $scope.copyObj = city;
                $scope.newArr = angular.copy(city.place);
                $scope.cityName = angular.copy(city.name);
                $scope.firstStep = false;
                $scope.secondStep = true;
            }

            function changeRegion() {
                $scope.firstStep = true;
                $scope.secondStep = false;
                $scope.formedText = '';
            }

            function searchAll() {
                $scope.formedText = $scope.cityName;
                $scope.flag = false;
            }

            function addText(town) {
                $scope.formedText = $scope.cityName + ", " + town.name;
                $scope.flag = false;
            }
        }
    }
});