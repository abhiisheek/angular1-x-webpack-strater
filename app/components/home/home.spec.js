/* global angular */

import home from './home';

describe('home.js', () => {

  let ctrl;
  let $timeout;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject((_$rootScope_, _$controller_, _$timeout_) => {
    const $scope = _$rootScope_.$new();
    $timeout = _$timeout_;

    ctrl = _$controller_('homeController', {$scope: $scope});
  }));

  it("Should be defined", () => {
    expect(ctrl).toBeDefined();
  });

  it("Should have 'Home View'", () => {
    $timeout.flush();
    expect(ctrl.name).toBe('Home View')
  });

});
