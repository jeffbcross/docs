angular.module('dpdDocsApp').controller('DocsPageController',
  ['$scope', '$routeParams', '$http', '$filter', function($scope, $routeParams, $http, $filter) {
    $http.get(getPageUrl($routeParams)).then(function(content) {
      $scope.content = $filter('markdown')(content.data);
    }, console.error);

    function getPageUrl (params) {
      if (params.subsection) {
        return 'docs/' + params.section + '/' + params.subsection + '/' + params.page + '.md';
      }
      else if (params.section) {
        return 'docs/' + params.section + '/' + params.page + '.md';
      }
      else if (params.page) {
        return 'docs/' + params.page + '.md';
      }
      else {
        return 'docs/index.md';
      }
    }
  }]);
