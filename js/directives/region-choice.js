app.directive('regionchoice', function () {
    return {
        restrict: 'AE',
        templateUrl: 'region-choice.html',
        link: function ($scope) {
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
            $scope.hideSelect = false;

            function openSelect() {
                if($scope.flag === true) {
                    $scope.flag = false;
                } else {
                    if($scope.secondStep === true || $scope.formedText.length > 0) {
                        $scope.flag = true;
                    } else {
                        $scope.flag = true;
                        $scope.firstStep = true;
                    }
                }
            }

            function showTown(city) {
                $scope.copyObj = city;
                $scope.newArr = angular.copy(city.place);
                $scope.regionName = angular.copy(city.name);
                $scope.firstStep = false;
                $scope.secondStep = true;
            }

            function changeRegion() {
                $scope.firstStep = true;
                $scope.secondStep = false;
                $scope.formedText = '';
            }

            function searchAll() {
                $scope.formedText = $scope.regionName;
                $scope.flag = false;
            }

            function addText(town) {
                $scope.formedText = $scope.regionName + ", " + town.name;
                $scope.flag = false;
            }
        }
    }
});