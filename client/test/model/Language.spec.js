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
    instance = new Pim.Language();
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

  describe('Language', function() {
    it('should create an instance of Language', function() {
      // uncomment below and update the code to test Language
      //var instance = new Pim.Language();
      //expect(instance).to.be.a(Pim.Language);
    });

    it('should have the property employeeId (base name: "EmployeeId")', function() {
      // uncomment below and update the code to test the property employeeId
      //var instance = new Pim.Language();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "Language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new Pim.Language();
      //expect(instance).to.be();
    });

    it('should have the property speakingLevel (base name: "SpeakingLevel")', function() {
      // uncomment below and update the code to test the property speakingLevel
      //var instance = new Pim.Language();
      //expect(instance).to.be();
    });

    it('should have the property writingLevel (base name: "WritingLevel")', function() {
      // uncomment below and update the code to test the property writingLevel
      //var instance = new Pim.Language();
      //expect(instance).to.be();
    });

    it('should have the property listeningLevel (base name: "ListeningLevel")', function() {
      // uncomment below and update the code to test the property listeningLevel
      //var instance = new Pim.Language();
      //expect(instance).to.be();
    });

    it('should have the property readingLevel (base name: "ReadingLevel")', function() {
      // uncomment below and update the code to test the property readingLevel
      //var instance = new Pim.Language();
      //expect(instance).to.be();
    });

    it('should have the property overallLevel (base name: "OverallLevel")', function() {
      // uncomment below and update the code to test the property overallLevel
      //var instance = new Pim.Language();
      //expect(instance).to.be();
    });

  });

}));
