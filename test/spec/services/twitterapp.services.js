'use strict';

describe('Service: twitterApp.services', function () {

  // load the service's module
  beforeEach(module('challenge1App'));

  // instantiate service
  var twitterApp.services;
  beforeEach(inject(function (_twitterApp.services_) {
    twitterApp.services = _twitterApp.services_;
  }));

  it('should do something', function () {
    expect(!!twitterApp.services).toBe(true);
  });

});
