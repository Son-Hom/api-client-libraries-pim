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

/**
 * The Language model module.
 * @module model/Language
 * @version 1.0.0
 */
class Language {
    /**
     * Constructs a new <code>Language</code>.
     * Represents a language skills of employee.
     * @alias module:model/Language
     * @param employeeId {String} 
     * @param language {String} 
     */
    constructor(employeeId, language) { 
        
        Language.initialize(this, employeeId, language);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, employeeId, language) { 
        obj['EmployeeId'] = employeeId;
        obj['Language'] = language;
    }

    /**
     * Constructs a <code>Language</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Language} obj Optional instance to populate.
     * @return {module:model/Language} The populated <code>Language</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Language();

            if (data.hasOwnProperty('EmployeeId')) {
                obj['EmployeeId'] = ApiClient.convertToType(data['EmployeeId'], 'String');
            }
            if (data.hasOwnProperty('Language')) {
                obj['Language'] = ApiClient.convertToType(data['Language'], 'String');
            }
            if (data.hasOwnProperty('SpeakingLevel')) {
                obj['SpeakingLevel'] = ApiClient.convertToType(data['SpeakingLevel'], 'String');
            }
            if (data.hasOwnProperty('WritingLevel')) {
                obj['WritingLevel'] = ApiClient.convertToType(data['WritingLevel'], 'String');
            }
            if (data.hasOwnProperty('ListeningLevel')) {
                obj['ListeningLevel'] = ApiClient.convertToType(data['ListeningLevel'], 'String');
            }
            if (data.hasOwnProperty('ReadingLevel')) {
                obj['ReadingLevel'] = ApiClient.convertToType(data['ReadingLevel'], 'String');
            }
            if (data.hasOwnProperty('OverallLevel')) {
                obj['OverallLevel'] = ApiClient.convertToType(data['OverallLevel'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Language</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Language</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Language.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['EmployeeId'] && !(typeof data['EmployeeId'] === 'string' || data['EmployeeId'] instanceof String)) {
            throw new Error("Expected the field `EmployeeId` to be a primitive type in the JSON string but got " + data['EmployeeId']);
        }
        // ensure the json data is a string
        if (data['Language'] && !(typeof data['Language'] === 'string' || data['Language'] instanceof String)) {
            throw new Error("Expected the field `Language` to be a primitive type in the JSON string but got " + data['Language']);
        }
        // ensure the json data is a string
        if (data['SpeakingLevel'] && !(typeof data['SpeakingLevel'] === 'string' || data['SpeakingLevel'] instanceof String)) {
            throw new Error("Expected the field `SpeakingLevel` to be a primitive type in the JSON string but got " + data['SpeakingLevel']);
        }
        // ensure the json data is a string
        if (data['WritingLevel'] && !(typeof data['WritingLevel'] === 'string' || data['WritingLevel'] instanceof String)) {
            throw new Error("Expected the field `WritingLevel` to be a primitive type in the JSON string but got " + data['WritingLevel']);
        }
        // ensure the json data is a string
        if (data['ListeningLevel'] && !(typeof data['ListeningLevel'] === 'string' || data['ListeningLevel'] instanceof String)) {
            throw new Error("Expected the field `ListeningLevel` to be a primitive type in the JSON string but got " + data['ListeningLevel']);
        }
        // ensure the json data is a string
        if (data['ReadingLevel'] && !(typeof data['ReadingLevel'] === 'string' || data['ReadingLevel'] instanceof String)) {
            throw new Error("Expected the field `ReadingLevel` to be a primitive type in the JSON string but got " + data['ReadingLevel']);
        }
        // ensure the json data is a string
        if (data['OverallLevel'] && !(typeof data['OverallLevel'] === 'string' || data['OverallLevel'] instanceof String)) {
            throw new Error("Expected the field `OverallLevel` to be a primitive type in the JSON string but got " + data['OverallLevel']);
        }

        return true;
    }


}

Language.RequiredProperties = ["EmployeeId", "Language"];

/**
 * @member {String} EmployeeId
 */
Language.prototype['EmployeeId'] = undefined;

/**
 * @member {String} Language
 */
Language.prototype['Language'] = undefined;

/**
 * @member {String} SpeakingLevel
 */
Language.prototype['SpeakingLevel'] = undefined;

/**
 * @member {String} WritingLevel
 */
Language.prototype['WritingLevel'] = undefined;

/**
 * @member {String} ListeningLevel
 */
Language.prototype['ListeningLevel'] = undefined;

/**
 * @member {String} ReadingLevel
 */
Language.prototype['ReadingLevel'] = undefined;

/**
 * @member {String} OverallLevel
 */
Language.prototype['OverallLevel'] = undefined;






export default Language;

