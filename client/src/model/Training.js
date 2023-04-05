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

/**
 * The Training model module.
 * @module model/Training
 * @version 1.0.0
 */
class Training {
    /**
     * Constructs a new <code>Training</code>.
     * Represent employee attended the training
     * @alias module:model/Training
     * @param employeeId {String} 
     * @param courseTitle {String} 
     */
    constructor(employeeId, courseTitle) { 
        
        Training.initialize(this, employeeId, courseTitle);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, employeeId, courseTitle) { 
        obj['EmployeeId'] = employeeId;
        obj['CourseTitle'] = courseTitle;
    }

    /**
     * Constructs a <code>Training</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Training} obj Optional instance to populate.
     * @return {module:model/Training} The populated <code>Training</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Training();

            if (data.hasOwnProperty('EmployeeId')) {
                obj['EmployeeId'] = ApiClient.convertToType(data['EmployeeId'], 'String');
            }
            if (data.hasOwnProperty('CourseTitle')) {
                obj['CourseTitle'] = ApiClient.convertToType(data['CourseTitle'], 'String');
            }
            if (data.hasOwnProperty('Organizer')) {
                obj['Organizer'] = BioDataCountryOfBirth.constructFromObject(data['Organizer']);
            }
            if (data.hasOwnProperty('FromDate')) {
                obj['FromDate'] = ApiClient.convertToType(data['FromDate'], 'String');
            }
            if (data.hasOwnProperty('ToDate')) {
                obj['ToDate'] = ApiClient.convertToType(data['ToDate'], 'String');
            }
            if (data.hasOwnProperty('NumberOfDays')) {
                obj['NumberOfDays'] = ApiClient.convertToType(data['NumberOfDays'], 'Number');
            }
            if (data.hasOwnProperty('Location')) {
                obj['Location'] = ApiClient.convertToType(data['Location'], 'String');
            }
            if (data.hasOwnProperty('Achievement')) {
                obj['Achievement'] = ApiClient.convertToType(data['Achievement'], 'String');
            }
            if (data.hasOwnProperty('Remarks')) {
                obj['Remarks'] = ApiClient.convertToType(data['Remarks'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Training</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Training</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Training.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['EmployeeId'] && !(typeof data['EmployeeId'] === 'string' || data['EmployeeId'] instanceof String)) {
            throw new Error("Expected the field `EmployeeId` to be a primitive type in the JSON string but got " + data['EmployeeId']);
        }
        // ensure the json data is a string
        if (data['CourseTitle'] && !(typeof data['CourseTitle'] === 'string' || data['CourseTitle'] instanceof String)) {
            throw new Error("Expected the field `CourseTitle` to be a primitive type in the JSON string but got " + data['CourseTitle']);
        }
        // validate the optional field `Organizer`
        if (data['Organizer']) { // data not null
          BioDataCountryOfBirth.validateJSON(data['Organizer']);
        }
        // ensure the json data is a string
        if (data['FromDate'] && !(typeof data['FromDate'] === 'string' || data['FromDate'] instanceof String)) {
            throw new Error("Expected the field `FromDate` to be a primitive type in the JSON string but got " + data['FromDate']);
        }
        // ensure the json data is a string
        if (data['ToDate'] && !(typeof data['ToDate'] === 'string' || data['ToDate'] instanceof String)) {
            throw new Error("Expected the field `ToDate` to be a primitive type in the JSON string but got " + data['ToDate']);
        }
        // ensure the json data is a string
        if (data['Location'] && !(typeof data['Location'] === 'string' || data['Location'] instanceof String)) {
            throw new Error("Expected the field `Location` to be a primitive type in the JSON string but got " + data['Location']);
        }
        // ensure the json data is a string
        if (data['Achievement'] && !(typeof data['Achievement'] === 'string' || data['Achievement'] instanceof String)) {
            throw new Error("Expected the field `Achievement` to be a primitive type in the JSON string but got " + data['Achievement']);
        }
        // ensure the json data is a string
        if (data['Remarks'] && !(typeof data['Remarks'] === 'string' || data['Remarks'] instanceof String)) {
            throw new Error("Expected the field `Remarks` to be a primitive type in the JSON string but got " + data['Remarks']);
        }

        return true;
    }


}

Training.RequiredProperties = ["EmployeeId", "CourseTitle"];

/**
 * @member {String} EmployeeId
 */
Training.prototype['EmployeeId'] = undefined;

/**
 * @member {String} CourseTitle
 */
Training.prototype['CourseTitle'] = undefined;

/**
 * @member {module:model/BioDataCountryOfBirth} Organizer
 */
Training.prototype['Organizer'] = undefined;

/**
 * @member {String} FromDate
 */
Training.prototype['FromDate'] = undefined;

/**
 * @member {String} ToDate
 */
Training.prototype['ToDate'] = undefined;

/**
 * @member {Number} NumberOfDays
 */
Training.prototype['NumberOfDays'] = undefined;

/**
 * @member {String} Location
 */
Training.prototype['Location'] = undefined;

/**
 * @member {String} Achievement
 */
Training.prototype['Achievement'] = undefined;

/**
 * @member {String} Remarks
 */
Training.prototype['Remarks'] = undefined;






export default Training;
