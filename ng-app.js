angular.module('dpdDocsApp', ['ngRoute', 'dpdDocsNavbar', 'dpdDocsNav', 'dpdDocsFooter', 'markdown']).
  config(['$routeProvider', function($routeProvider) {
    var docsRoute = {
      templateUrl: 'docs-page.html',
      controller: 'DocsPageController'
    };

    $routeProvider.
      when('/docs', docsRoute).
      when('/docs/:page', docsRoute).
      when('/docs/:section/:page', docsRoute).
      when('/docs/:section/:subsection/:page', docsRoute).
      otherwise({
        redirectTo: '/'
      });
  }]);