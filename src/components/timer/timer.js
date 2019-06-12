import angularMoment from 'angular-moment';

import template from './timer.template.html';

class timerController {
  $onInit() {
    this.time = moment(new Date());
  }
}

export const timerComponent = angular.module('timer', [angularMoment]).component('timer', {
  template,
  controller: timerController,
  controllerAs: 'vm',
}).name;
