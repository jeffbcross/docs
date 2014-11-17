angular.module('dpdDocsNav', ['dpdNavigationService']).
  directive('dpdDocsNav', function() {
    return {
      templateUrl: 'components/docs-nav/docs-nav.html',
      controllerAs: 'navCtrl',
      controller: ['dpdNavigationService', function (dpdNavigationService) {
        this.nav = dpdNavigationService;
      }]
    };
  });
