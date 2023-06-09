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
 * The BioDataNamePrimaryName model module.
 * @module model/BioDataNamePrimaryName
 * @version 1.0.0
 */
class BioDataNamePrimaryName {
    /**
     * Constructs a new <code>BioDataNamePrimaryName</code>.
     * @alias module:model/BioDataNamePrimaryName
     * @param firstName {String} 
     */
    constructor(firstName) { 
        
        BioDataNamePrimaryName.initialize(this, firstName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName) { 
        obj['FirstName'] = firstName;
    }

    /**
     * Constructs a <code>BioDataNamePrimaryName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BioDataNamePrimaryName} obj Optional instance to populate.
     * @return {module:model/BioDataNamePrimaryName} The populated <code>BioDataNamePrimaryName</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BioDataNamePrimaryName();

            if (data.hasOwnProperty('FirstName')) {
                obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
            }
            if (data.hasOwnProperty('MiddleName')) {
                obj['MiddleName'] = ApiClient.convertToType(data['MiddleName'], 'String');
            }
            if (data.hasOwnProperty('LastName')) {
                obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BioDataNamePrimaryName</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BioDataNamePrimaryName</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BioDataNamePrimaryName.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['FirstName'] && !(typeof data['FirstName'] === 'string' || data['FirstName'] instanceof String)) {
            throw new Error("Expected the field `FirstName` to be a primitive type in the JSON string but got " + data['FirstName']);
        }
        // ensure the json data is a string
        if (data['MiddleName'] && !(typeof data['MiddleName'] === 'string' || data['MiddleName'] instanceof String)) {
            throw new Error("Expected the field `MiddleName` to be a primitive type in the JSON string but got " + data['MiddleName']);
        }
        // ensure the json data is a string
        if (data['LastName'] && !(typeof data['LastName'] === 'string' || data['LastName'] instanceof String)) {
            throw new Error("Expected the field `LastName` to be a primitive type in the JSON string but got " + data['LastName']);
        }

        return true;
    }


}

BioDataNamePrimaryName.RequiredProperties = ["FirstName"];

/**
 * @member {String} FirstName
 */
BioDataNamePrimaryName.prototype['FirstName'] = undefined;

/**
 * @member {String} MiddleName
 */
BioDataNamePrimaryName.prototype['MiddleName'] = undefined;

/**
 * @member {String} LastName
 */
BioDataNamePrimaryName.prototype['LastName'] = undefined;






export default BioDataNamePrimaryName;

