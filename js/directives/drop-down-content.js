app.directive('sliderToggle', function() {
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