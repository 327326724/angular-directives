/**
 * Created by dulin on 2015/4/9.
 */

var rollerPickerDirective = angular.module('rollerPickerDirective', []);

rollerPickerDirective
    .constant('rollerPickerConfig', {})
    .directive('rollerPicker', ['$document', function($document) {
        return {
            restrict: 'EA',
            replace: true,
            require: 'ngModel',
            link: function(scope, element, attrs, NgModelController) {
                debugger;
            }
        }
    }])
