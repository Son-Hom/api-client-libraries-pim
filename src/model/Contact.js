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
 * The Contact model module.
 * @module model/Contact
 * @version 1.0.0
 */
class Contact {
    /**
     * Constructs a new <code>Contact</code>.
     * Represents personal contact of employee.
     * @alias module:model/Contact
     * @param employeeId {String} 
     * @param value {String} 
     * @param type {String} 
     */
    constructor(employeeId, value, type) { 
        
        Contact.initialize(this, employeeId, value, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, employeeId, value, type) { 
        obj['EmployeeId'] = employeeId;
        obj['Value'] = value;
        obj['Type'] = type;
    }

    /**
     * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contact} obj Optional instance to populate.
     * @return {module:model/Contact} The populated <code>Contact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contact();

            if (data.hasOwnProperty('EmployeeId')) {
                obj['EmployeeId'] = ApiClient.convertToType(data['EmployeeId'], 'String');
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Contact</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Contact</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Contact.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['EmployeeId'] && !(typeof data['EmployeeId'] === 'string' || data['EmployeeId'] instanceof String)) {
            throw new Error("Expected the field `EmployeeId` to be a primitive type in the JSON string but got " + data['EmployeeId']);
        }
        // ensure the json data is a string
        if (data['Value'] && !(typeof data['Value'] === 'string' || data['Value'] instanceof String)) {
            throw new Error("Expected the field `Value` to be a primitive type in the JSON string but got " + data['Value']);
        }
        // ensure the json data is a string
        if (data['Type'] && !(typeof data['Type'] === 'string' || data['Type'] instanceof String)) {
            throw new Error("Expected the field `Type` to be a primitive type in the JSON string but got " + data['Type']);
        }

        return true;
    }


}

Contact.RequiredProperties = ["EmployeeId", "Value", "Type"];

/**
 * @member {String} EmployeeId
 */
Contact.prototype['EmployeeId'] = undefined;

/**
 * @member {String} Value
 */
Contact.prototype['Value'] = undefined;

/**
 * @member {String} Type
 */
Contact.prototype['Type'] = undefined;






export default Contact;

