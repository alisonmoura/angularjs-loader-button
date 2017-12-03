# Angularjs Loader Button

Loader button directive for Angularjs

## Install

**Bower**
```
bower install angularjs-loader-button --save
```
**NPM**
```
npm install angularjs-loader-button --save
```
Add `angularjsLoaderButton` as dependency in your module.
```javascript
angular.module('app',['angularjsLoaderButton']);
```
## Usage

```html
<loader-button text="Button text" load="fetchDatas()"></loader-button>
```
The `loaderButton` directive will call the function passed in `load` attribute. This function should be in `$scope` and should return an `Promise` instance. Likewise:

```javascript
$scope.fetchDatas = function() {
  return $http.get(...).then(..);
};
```

## Live Demo

The live demo is comming...

## Issues

Please let me know if you are having problems, create an [issue](https://github.com/alisonmoura/angularjs-loader-button/issues). Thanks!