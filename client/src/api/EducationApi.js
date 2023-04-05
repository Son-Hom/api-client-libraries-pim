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


import ApiClient from "../ApiClient";
import Education from '../model/Education';

/**
* Education service.
* @module api/EducationApi
* @version 1.0.0
*/
export default class EducationApi {

    /**
    * Constructs a new EducationApi. 
    * @alias module:api/EducationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createEducation operation.
     * @callback module:api/EducationApi~createEducationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Education} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create educations.
     * @param {String} employeeId 
     * @param {String} authorization 
     * @param {module:model/Education} education Body of education as a object that needs to be added to entity Education.
     * @param {module:api/EducationApi~createEducationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Education}
     */
    createEducation(employeeId, authorization, education, callback) {
      let postBody = education;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling createEducation");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling createEducation");
      }
      // verify the required parameter 'education' is set
      if (education === undefined || education === null) {
        throw new Error("Missing the required parameter 'education' when calling createEducation");
      }

      let pathParams = {
        'employeeId': employeeId
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Education;
      return this.apiClient.callApi(
        '/pim-svc/employees/{employeeId}/educations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteEducation operation.
     * @callback module:api/EducationApi~deleteEducationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete education.
     * @param {String} employeeId 
     * @param {String} educationId 
     * @param {String} authorization 
     * @param {module:api/EducationApi~deleteEducationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteEducation(employeeId, educationId, authorization, callback) {
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling deleteEducation");
      }
      // verify the required parameter 'educationId' is set
      if (educationId === undefined || educationId === null) {
        throw new Error("Missing the required parameter 'educationId' when calling deleteEducation");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteEducation");
      }

      let pathParams = {
        'employeeId': employeeId,
        'educationId': educationId
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/pim-svc/employees/{employeeId}/educations/{educationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEducation operation.
     * @callback module:api/EducationApi~getEducationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Education} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specfic education.
     * @param {String} employeeId 
     * @param {String} educationId 
     * @param {String} authorization 
     * @param {module:api/EducationApi~getEducationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Education}
     */
    getEducation(employeeId, educationId, authorization, callback) {
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling getEducation");
      }
      // verify the required parameter 'educationId' is set
      if (educationId === undefined || educationId === null) {
        throw new Error("Missing the required parameter 'educationId' when calling getEducation");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getEducation");
      }

      let pathParams = {
        'employeeId': employeeId,
        'educationId': educationId
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Education;
      return this.apiClient.callApi(
        '/pim-svc/employees/{employeeId}/educations/{educationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listEducations operation.
     * @callback module:api/EducationApi~listEducationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Education>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all items of education.
     * @param {String} employeeId 
     * @param {String} authorization 
     * @param {Object} opts Optional parameters
     * @param {String} [fromYear] 
     * @param {String} [toYear] 
     * @param {String} [schoolName] 
     * @param {String} [degree] 
     * @param {String} [fieldOfStudy] 
     * @param {String} [major] 
     * @param {module:api/EducationApi~listEducationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Education>}
     */
    listEducations(employeeId, authorization, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling listEducations");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling listEducations");
      }

      let pathParams = {
        'employeeId': employeeId
      };
      let queryParams = {
        'FromYear': opts['fromYear'],
        'ToYear': opts['toYear'],
        'School.Name': opts['schoolName'],
        'Degree': opts['degree'],
        'FieldOfStudy': opts['fieldOfStudy'],
        'Major': opts['major']
      };
      let headerParams = {
        'authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Education];
      return this.apiClient.callApi(
        '/pim-svc/employees/{employeeId}/educations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the optionsEducationId operation.
     * @callback module:api/EducationApi~optionsEducationIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enforce CORS policy.
     * @param {String} employeeId 
     * @param {String} educationId 
     * @param {String} authorization 
     * @param {module:api/EducationApi~optionsEducationIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    optionsEducationId(employeeId, educationId, authorization, callback) {
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling optionsEducationId");
      }
      // verify the required parameter 'educationId' is set
      if (educationId === undefined || educationId === null) {
        throw new Error("Missing the required parameter 'educationId' when calling optionsEducationId");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling optionsEducationId");
      }

      let pathParams = {
        'employeeId': employeeId,
        'educationId': educationId
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/pim-svc/employees/{employeeId}/educations/{educationId}', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the optionsEducations operation.
     * @callback module:api/EducationApi~optionsEducationsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enforce CORS policy.
     * @param {String} employeeId 
     * @param {String} authorization 
     * @param {module:api/EducationApi~optionsEducationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    optionsEducations(employeeId, authorization, callback) {
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling optionsEducations");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling optionsEducations");
      }

      let pathParams = {
        'employeeId': employeeId
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/pim-svc/employees/{employeeId}/educations', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEducation operation.
     * @callback module:api/EducationApi~updateEducationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Education} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update education.
     * @param {String} employeeId 
     * @param {String} educationId 
     * @param {String} authorization 
     * @param {module:model/Education} education Body of education as an object that needs to be updated to entity Education.
     * @param {module:api/EducationApi~updateEducationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Education}
     */
    updateEducation(employeeId, educationId, authorization, education, callback) {
      let postBody = education;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling updateEducation");
      }
      // verify the required parameter 'educationId' is set
      if (educationId === undefined || educationId === null) {
        throw new Error("Missing the required parameter 'educationId' when calling updateEducation");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling updateEducation");
      }
      // verify the required parameter 'education' is set
      if (education === undefined || education === null) {
        throw new Error("Missing the required parameter 'education' when calling updateEducation");
      }

      let pathParams = {
        'employeeId': employeeId,
        'educationId': educationId
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Education;
      return this.apiClient.callApi(
        '/pim-svc/employees/{employeeId}/educations/{educationId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}