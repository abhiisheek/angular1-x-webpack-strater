import home from './components/home/home.html';
/**
 * Application config which configures the routing and other ...
 * @param {object} $stateProvider - State provider service from ui-router
 * @param {object} $urlRouterProvider - URL Route provider service from ui-router. Used to fallback to default route
 * when, none of the routes are matched.
 */
export default function appConfig ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('app_home', {
      url: '/home',
      template: home,
      controller: 'homeController as vm'
    })
}
