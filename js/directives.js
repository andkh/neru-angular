app.directive('counter', function() {
    return {
        restrict: 'A',
        scope: { value: '=value' },
        template: '<a href="javascript:;" class="counter-minus" data-ng-click="minus()">-</a>\
                  <input type="text" class="counter-field" ng-model="value" data-ng-change="changed()" data-ng-readonly="readonly">\
                  <a  href="javascript:;" class="counter-plus active" data-ng-click="plus()">+</a>',
        link: function( scope , element , attributes ) {
            // Make sure the value attribute is not missing.
            if ( angular.isUndefined(scope.value) ) {
                throw "Missing the value attribute on the counter directive.";
            }

            var min = angular.isUndefined(attributes.min) ? null : parseInt(attributes.min);
            var max = angular.isUndefined(attributes.max) ? null : parseInt(attributes.max);
            var step = angular.isUndefined(attributes.step) ? 1 : parseInt(attributes.step);

            element.addClass('counter-container');

            // If the 'editable' attribute is set, we will make the field editable.
            scope.readonly = angular.isUndefined(attributes.editable) ? true : false;

            /**
             * Sets the value as an integer.
             */
            var setValue = function( val ) {
                scope.value = parseInt( val );
            };

            // Set the value initially, as an integer.
            setValue( scope.value );

            /**
             * Decrement the value and make sure we stay within the limits, if defined.
             */
            scope.minus = function() {
                if ( min && (scope.value <= min || scope.value - step <= min) || min === 0 && scope.value < 1 ) {
                    setValue( min );
                    return false;
                }
                setValue( scope.value - step );
            };

            /**
             * Increment the value and make sure we stay within the limits, if defined.
             */
            scope.plus = function() {
                if ( max && (scope.value >= max || scope.value + step >= max) ) {
                    setValue( max );
                    return false;
                }
                setValue( scope.value + step );
            };
        }
    }
});

/**
 * Checklist-model
 * AngularJS directive for list of checkboxes
 * https://github.com/vitalets/checklist-model
 * License: MIT http://opensource.org/licenses/MIT
 */
app.directive('checklistModel', ['$parse', '$compile', function($parse, $compile) {
    // contains
    function contains(arr, item, comparator) {
        if (angular.isArray(arr)) {
            for (var i = arr.length; i--;) {
                if (comparator(arr[i], item)) {
                    return true;
                }
            }
        }
        return false;
    }

    // add
    function add(arr, item, comparator) {
        arr = angular.isArray(arr) ? arr : [];
        if(!contains(arr, item, comparator)) {
            arr.push(item);
        }
        return arr;
    }

    // remove
    function remove(arr, item, comparator) {
        if (angular.isArray(arr)) {
            for (var i = arr.length; i--;) {
                if (comparator(arr[i], item)) {
                    arr.splice(i, 1);
                    break;
                }
            }
        }
        return arr;
    }

    // http://stackoverflow.com/a/19228302/1458162
    function postLinkFn(scope, elem, attrs) {
        // exclude recursion, but still keep the model
        var checklistModel = attrs.checklistModel;
        attrs.$set("checklistModel", null);
        // compile with `ng-model` pointing to `checked`
        $compile(elem)(scope);
        attrs.$set("checklistModel", checklistModel);

        // getter / setter for original model
        var getter = $parse(checklistModel);
        var setter = getter.assign;
        var checklistChange = $parse(attrs.checklistChange);
        var checklistBeforeChange = $parse(attrs.checklistBeforeChange);

        // value added to list
        var value = attrs.checklistValue ? $parse(attrs.checklistValue)(scope.$parent) : attrs.value;


        var comparator = angular.equals;

        if (attrs.hasOwnProperty('checklistComparator')){
            if (attrs.checklistComparator[0] == '.') {
                var comparatorExpression = attrs.checklistComparator.substring(1);
                comparator = function (a, b) {
                    return a[comparatorExpression] === b[comparatorExpression];
                };

            } else {
                comparator = $parse(attrs.checklistComparator)(scope.$parent);
            }
        }

        // watch UI checked change
        scope.$watch(attrs.ngModel, function(newValue, oldValue) {
            if (newValue === oldValue) {
                return;
            }

            if (checklistBeforeChange && (checklistBeforeChange(scope) === false)) {
                scope[attrs.ngModel] = contains(getter(scope.$parent), value, comparator);
                return;
            }

            setValueInChecklistModel(value, newValue);

            if (checklistChange) {
                checklistChange(scope);
            }
        });

        function setValueInChecklistModel(value, checked) {
            var current = getter(scope.$parent);
            if (angular.isFunction(setter)) {
                if (checked === true) {
                    setter(scope.$parent, add(current, value, comparator));
                } else {
                    setter(scope.$parent, remove(current, value, comparator));
                }
            }

        }

        // declare one function to be used for both $watch functions
        function setChecked(newArr, oldArr) {
            if (checklistBeforeChange && (checklistBeforeChange(scope) === false)) {
                setValueInChecklistModel(value, scope[attrs.ngModel]);
                return;
            }
            scope[attrs.ngModel] = contains(newArr, value, comparator);
        }

        // watch original model change
        // use the faster $watchCollection method if it's available
        if (angular.isFunction(scope.$parent.$watchCollection)) {
            scope.$parent.$watchCollection(checklistModel, setChecked);
        } else {
            scope.$parent.$watch(checklistModel, setChecked, true);
        }
    }

    return {
        restrict: 'A',
        priority: 1000,
        terminal: true,
        scope: true,
        compile: function(tElement, tAttrs) {
            if ((tElement[0].tagName !== 'INPUT' || tAttrs.type !== 'checkbox') && (tElement[0].tagName !== 'MD-CHECKBOX') && (!tAttrs.btnCheckbox)) {
                throw 'checklist-model should be applied to `input[type="checkbox"]` or `md-checkbox`.';
            }

            if (!tAttrs.checklistValue && !tAttrs.value) {
                throw 'You should provide `value` or `checklist-value`.';
            }

            // by default ngModel is 'checked', so we set it if not specified
            if (!tAttrs.ngModel) {
                // local scope var storing individual checkbox model
                tAttrs.$set("ngModel", "checked");
            }

            return postLinkFn;
        }
    };
}]);

// Map
app.run(function($rootScope) {
    $rootScope.mouseover = function() {
        console.log('mouseover', this);
        this.style.backgroundColor = 'grey';
    };
    $rootScope.mouseout = function() {
        this.style.backgroundColor = 'white';
    };
    $rootScope.click = function() {console.log('click')};
    $rootScope.customMarkers = [
        {address: "1600 pennsylvania ave, washington DC", "class": "my1"},
        {address: "600 pennsylvania ave, washington DC",  "class": "my2"}
    ];
});

// Show/Hide Content
app
    .directive('sliderToggle', function() {
        return {
            restrict: 'AE',
            link: function(scope, element, attrs) {
                var target = element.next()[0];
                element.parent().addClass('close');

                attrs.expanded = false;

                element.bind('click', function() {
                    if(!attrs.expanded) {
                        element.parent().removeClass('close').addClass('open');
                        target.style.height = '16px';
                    } else {
                        element.parent().removeClass('open').addClass('close');
                        target.style.height = 0;
                    }
                    attrs.expanded = !attrs.expanded;
                });
            }
        }
    });