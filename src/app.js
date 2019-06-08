import angularMoment from 'angular-moment';

import { timerComponent } from './components/timer/timer';

import template from './app.html';

const app = () => {
  return {
    template,
    controller: AppCtrl,
    controllerAs: 'app',
  };
};

class AppCtrl {}

angular
  .module('myApp', [angularMoment, timerComponent])
  .directive('app', app)
  .run(function(amMoment) {
    amMoment.changeLocale('de');
  });

angular.element(() => {
  angular.bootstrap(document, ['myApp']);
});
