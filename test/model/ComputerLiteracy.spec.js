/**
 * pim
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Pim);
  }
}(this, function(expect, Pim) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Pim.ComputerLiteracy();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ComputerLiteracy', function() {
    it('should create an instance of ComputerLiteracy', function() {
      // uncomment below and update the code to test ComputerLiteracy
      //var instance = new Pim.ComputerLiteracy();
      //expect(instance).to.be.a(Pim.ComputerLiteracy);
    });

    it('should have the property employeeId (base name: "EmployeeId")', function() {
      // uncomment below and update the code to test the property employeeId
      //var instance = new Pim.ComputerLiteracy();
      //expect(instance).to.be();
    });

    it('should have the property softwareApplication (base name: "SoftwareApplication")', function() {
      // uncomment below and update the code to test the property softwareApplication
      //var instance = new Pim.ComputerLiteracy();
      //expect(instance).to.be();
    });

    it('should have the property level (base name: "Level")', function() {
      // uncomment below and update the code to test the property level
      //var instance = new Pim.ComputerLiteracy();
      //expect(instance).to.be();
    });

  });

}));