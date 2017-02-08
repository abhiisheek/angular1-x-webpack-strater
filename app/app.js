import AppConfig from './config';
import home from './components/home/home';

/* global angular */

/**
 * An Application module on which the app is bootstrapped.
 */
export default angular.module("app-module", ['ui.router', 'ngAnimate', home])
  .config(['$stateProvider', '$urlRouterProvider', AppConfig])
  .name;
