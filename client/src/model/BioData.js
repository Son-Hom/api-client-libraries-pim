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

import ApiClient from '../ApiClient';
import BioDataCountryOfBirth from './BioDataCountryOfBirth';
import BioDataName from './BioDataName';

/**
 * The BioData model module.
 * @module model/BioData
 * @version 1.0.0
 */
class BioData {
    /**
     * Constructs a new <code>BioData</code>.
     * Represents to record personal data for an employee, it can not be change.
     * @alias module:model/BioData
     * @param initial {String} 
     * @param employeeId {String} 
     * @param name {module:model/BioDataName} 
     * @param gender {String} 
     */
    constructor(initial, employeeId, name, gender) { 
        
        BioData.initialize(this, initial, employeeId, name, gender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, initial, employeeId, name, gender) { 
        obj['Initial'] = initial;
        obj['EmployeeId'] = employeeId;
        obj['Name'] = name;
        obj['Gender'] = gender;
    }

    /**
     * Constructs a <code>BioData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BioData} obj Optional instance to populate.
     * @return {module:model/BioData} The populated <code>BioData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BioData();

            if (data.hasOwnProperty('Initial')) {
                obj['Initial'] = ApiClient.convertToType(data['Initial'], 'String');
            }
            if (data.hasOwnProperty('EmployeeId')) {
                obj['EmployeeId'] = ApiClient.convertToType(data['EmployeeId'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = BioDataName.constructFromObject(data['Name']);
            }
            if (data.hasOwnProperty('Gender')) {
                obj['Gender'] = ApiClient.convertToType(data['Gender'], 'String');
            }
            if (data.hasOwnProperty('DateOfBirth')) {
                obj['DateOfBirth'] = ApiClient.convertToType(data['DateOfBirth'], 'String');
            }
            if (data.hasOwnProperty('CountryOfBirth')) {
                obj['CountryOfBirth'] = BioDataCountryOfBirth.constructFromObject(data['CountryOfBirth']);
            }
            if (data.hasOwnProperty('ProvinceOfBirth')) {
                obj['ProvinceOfBirth'] = BioDataCountryOfBirth.constructFromObject(data['ProvinceOfBirth']);
            }
            if (data.hasOwnProperty('Nationality')) {
                obj['Nationality'] = ApiClient.convertToType(data['Nationality'], 'String');
            }
            if (data.hasOwnProperty('NationalID')) {
                obj['NationalID'] = ApiClient.convertToType(data['NationalID'], 'Number');
            }
            if (data.hasOwnProperty('MaritalStatus')) {
                obj['MaritalStatus'] = ApiClient.convertToType(data['MaritalStatus'], 'String');
            }
            if (data.hasOwnProperty('ProfilePhoto')) {
                obj['ProfilePhoto'] = ApiClient.convertToType(data['ProfilePhoto'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BioData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BioData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BioData.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['Initial'] && !(typeof data['Initial'] === 'string' || data['Initial'] instanceof String)) {
            throw new Error("Expected the field `Initial` to be a primitive type in the JSON string but got " + data['Initial']);
        }
        // ensure the json data is a string
        if (data['EmployeeId'] && !(typeof data['EmployeeId'] === 'string' || data['EmployeeId'] instanceof String)) {
            throw new Error("Expected the field `EmployeeId` to be a primitive type in the JSON string but got " + data['EmployeeId']);
        }
        // validate the optional field `Name`
        if (data['Name']) { // data not null
          BioDataName.validateJSON(data['Name']);
        }
        // ensure the json data is a string
        if (data['Gender'] && !(typeof data['Gender'] === 'string' || data['Gender'] instanceof String)) {
            throw new Error("Expected the field `Gender` to be a primitive type in the JSON string but got " + data['Gender']);
        }
        // ensure the json data is a string
        if (data['DateOfBirth'] && !(typeof data['DateOfBirth'] === 'string' || data['DateOfBirth'] instanceof String)) {
            throw new Error("Expected the field `DateOfBirth` to be a primitive type in the JSON string but got " + data['DateOfBirth']);
        }
        // validate the optional field `CountryOfBirth`
        if (data['CountryOfBirth']) { // data not null
          BioDataCountryOfBirth.validateJSON(data['CountryOfBirth']);
        }
        // validate the optional field `ProvinceOfBirth`
        if (data['ProvinceOfBirth']) { // data not null
          BioDataCountryOfBirth.validateJSON(data['ProvinceOfBirth']);
        }
        // ensure the json data is a string
        if (data['Nationality'] && !(typeof data['Nationality'] === 'string' || data['Nationality'] instanceof String)) {
            throw new Error("Expected the field `Nationality` to be a primitive type in the JSON string but got " + data['Nationality']);
        }
        // ensure the json data is a string
        if (data['MaritalStatus'] && !(typeof data['MaritalStatus'] === 'string' || data['MaritalStatus'] instanceof String)) {
            throw new Error("Expected the field `MaritalStatus` to be a primitive type in the JSON string but got " + data['MaritalStatus']);
        }
        // ensure the json data is a string
        if (data['ProfilePhoto'] && !(typeof data['ProfilePhoto'] === 'string' || data['ProfilePhoto'] instanceof String)) {
            throw new Error("Expected the field `ProfilePhoto` to be a primitive type in the JSON string but got " + data['ProfilePhoto']);
        }

        return true;
    }


}

BioData.RequiredProperties = ["Initial", "EmployeeId", "Name", "Gender"];

/**
 * @member {String} Initial
 */
BioData.prototype['Initial'] = undefined;

/**
 * @member {String} EmployeeId
 */
BioData.prototype['EmployeeId'] = undefined;

/**
 * @member {module:model/BioDataName} Name
 */
BioData.prototype['Name'] = undefined;

/**
 * @member {String} Gender
 */
BioData.prototype['Gender'] = undefined;

/**
 * @member {String} DateOfBirth
 */
BioData.prototype['DateOfBirth'] = undefined;

/**
 * @member {module:model/BioDataCountryOfBirth} CountryOfBirth
 */
BioData.prototype['CountryOfBirth'] = undefined;

/**
 * @member {module:model/BioDataCountryOfBirth} ProvinceOfBirth
 */
BioData.prototype['ProvinceOfBirth'] = undefined;

/**
 * @member {String} Nationality
 */
BioData.prototype['Nationality'] = undefined;

/**
 * @member {Number} NationalID
 */
BioData.prototype['NationalID'] = undefined;

/**
 * @member {String} MaritalStatus
 */
BioData.prototype['MaritalStatus'] = undefined;

/**
 * @member {String} ProfilePhoto
 */
BioData.prototype['ProfilePhoto'] = undefined;






export default BioData;
