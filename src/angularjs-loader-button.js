angular.module('angularjsLoaderButton',[])
.directive('loaderButton', function() {
    return {
        restrict: 'E',
        scope: {
            load: '&'
        },
        link: function(scope, element, attrs){
            console.log(element);
            element[0].onclick = function(){
                scope.loading = true;
                var promise = scope.load();
                promise.finally(function(){
                    scope.loading = false;
                });
            };
        },
        template: function(elem, attrs){
            if(attrs.loadingImage) return '<button class="' + (attrs.type || '') + '"><img ng-show="loading" src="' + attrs.loadingImage + '" width="20px"> ' + (attrs.text || 'Button') + '</button>'
            else return '<button class="' + (attrs.type || '') + '"><svg ng-show="loading" version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <path fill="#fff" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/></path></svg> ' + (attrs.text || 'Button') + '</button>'
        }
    };
});