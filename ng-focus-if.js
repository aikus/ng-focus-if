/**
 * USE(html): <input ng-focus-if="field == 'abc'"/>
 */
application.directive('ngFocusIf', ["$timeout", function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            if(scope.$eval(attrs['ngFocusIf'])) {
                $timeout(function () {
                    element.focus();
                }, 0);
            }
        }
    };
}]);
