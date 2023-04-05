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
    instance = new Pim.WorkExperience();
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

  describe('WorkExperience', function() {
    it('should create an instance of WorkExperience', function() {
      // uncomment below and update the code to test WorkExperience
      //var instance = new Pim.WorkExperience();
      //expect(instance).to.be.a(Pim.WorkExperience);
    });

    it('should have the property employeeId (base name: "EmployeeId")', function() {
      // uncomment below and update the code to test the property employeeId
      //var instance = new Pim.WorkExperience();
      //expect(instance).to.be();
    });

    it('should have the property fromDate (base name: "FromDate")', function() {
      // uncomment below and update the code to test the property fromDate
      //var instance = new Pim.WorkExperience();
      //expect(instance).to.be();
    });

    it('should have the property toDate (base name: "ToDate")', function() {
      // uncomment below and update the code to test the property toDate
      //var instance = new Pim.WorkExperience();
      //expect(instance).to.be();
    });

    it('should have the property employer (base name: "Employer")', function() {
      // uncomment below and update the code to test the property employer
      //var instance = new Pim.WorkExperience();
      //expect(instance).to.be();
    });

    it('should have the property positionTitle (base name: "PositionTitle")', function() {
      // uncomment below and update the code to test the property positionTitle
      //var instance = new Pim.WorkExperience();
      //expect(instance).to.be();
    });

    it('should have the property positionLevel (base name: "PositionLevel")', function() {
      // uncomment below and update the code to test the property positionLevel
      //var instance = new Pim.WorkExperience();
      //expect(instance).to.be();
    });

    it('should have the property basicSalary (base name: "BasicSalary")', function() {
      // uncomment below and update the code to test the property basicSalary
      //var instance = new Pim.WorkExperience();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "Currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new Pim.WorkExperience();
      //expect(instance).to.be();
    });

    it('should have the property salaryType (base name: "SalaryType")', function() {
      // uncomment below and update the code to test the property salaryType
      //var instance = new Pim.WorkExperience();
      //expect(instance).to.be();
    });

    it('should have the property supervisorName (base name: "SupervisorName")', function() {
      // uncomment below and update the code to test the property supervisorName
      //var instance = new Pim.WorkExperience();
      //expect(instance).to.be();
    });

    it('should have the property directSubordinate (base name: "DirectSubordinate")', function() {
      // uncomment below and update the code to test the property directSubordinate
      //var instance = new Pim.WorkExperience();
      //expect(instance).to.be();
    });

    it('should have the property reasonOfLeaving (base name: "ReasonOfLeaving")', function() {
      // uncomment below and update the code to test the property reasonOfLeaving
      //var instance = new Pim.WorkExperience();
      //expect(instance).to.be();
    });

    it('should have the property responsibilities (base name: "Responsibilities")', function() {
      // uncomment below and update the code to test the property responsibilities
      //var instance = new Pim.WorkExperience();
      //expect(instance).to.be();
    });

    it('should have the property remarks (base name: "Remarks")', function() {
      // uncomment below and update the code to test the property remarks
      //var instance = new Pim.WorkExperience();
      //expect(instance).to.be();
    });

  });

}));