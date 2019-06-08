import moment from 'moment';

// Define `angular` as global object
// import does not work with angular-mocks, the reasons for this are explained here:
// https://stackoverflow.com/a/43111545/831465
const angular = require('angular');
require('angular-mocks');
Object.defineProperty(window, 'angular', {
  value: angular,
});

// Define `moment` as global object
Object.defineProperty(window, 'moment', {
  value: moment,
});

// Import the main app
import './app';
