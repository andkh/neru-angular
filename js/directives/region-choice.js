app.directive('regionchoice', function () {
    return {
        restrict: 'AE',
        templateUrl: 'region-choice.html',
        link: function ($scope, element) {
            $scope.openSelect = openSelect;
            $scope.showTown = showTown;
            $scope.changeRegion = changeRegion;
            $scope.addText = addText;
            $scope.formedText = '';
            $scope.flag = false;

            element.parent().addClass('close');

            function openSelect() {
                $scope.flag = true;

                if(element.parent().hasClass('open')) {
                    element.parent().removeClass('open').addClass('close');
                    element.children()[1].classList.remove('hide');
                } else {
                    element.parent().removeClass('close').addClass('open');
                }
            }

            function showTown(cityName, newArr) {
                element.children()[1].classList.add('hide');
                $scope.newArr = newArr;
                $scope.cityName = cityName;
            }

            function changeRegion() {
                element.children()[1].classList.remove('hide');
                element.children()[0].setAttribute('value', '');
            }

            function addText(city, town) {
                $scope.formedText = city + ", " + town;
            }
        }
    }
});