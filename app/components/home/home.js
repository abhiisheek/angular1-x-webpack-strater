/* global angular */
import './home.scss';

/**
 * Home view controller class.
 */
class HomeController {
  /**
   * Creates an instance of home controller(HomeController)
   * @param {Object} $timeout - Instance of $timeout service
   */
  constructor($timeout) {
    $timeout(() => this.name= "Home View", 0);
  }
}

HomeController.$inject = ['$timeout'];

export default angular.module("home-module", [])
  .controller('homeController', HomeController)
  .name;
