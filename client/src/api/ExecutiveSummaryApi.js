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
import ExecutiveSummary from '../model/ExecutiveSummary';

/**
* ExecutiveSummary service.
* @module api/ExecutiveSummaryApi
* @version 1.0.0
*/
export default class ExecutiveSummaryApi {

    /**
    * Constructs a new ExecutiveSummaryApi. 
    * @alias module:api/ExecutiveSummaryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createExecutiveSummary operation.
     * @callback module:api/ExecutiveSummaryApi~createExecutiveSummaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExecutiveSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create executive summary.
     * @param {String} employeeId 
     * @param {String} authorization 
     * @param {module:model/ExecutiveSummary} executiveSummary Body of executive summaries as a object that needs to be added to entity ExecutiveSummary.
     * @param {module:api/ExecutiveSummaryApi~createExecutiveSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExecutiveSummary}
     */
    createExecutiveSummary(employeeId, authorization, executiveSummary, callback) {
      let postBody = executiveSummary;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling createExecutiveSummary");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling createExecutiveSummary");
      }
      // verify the required parameter 'executiveSummary' is set
      if (executiveSummary === undefined || executiveSummary === null) {
        throw new Error("Missing the required parameter 'executiveSummary' when calling createExecutiveSummary");
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
      let returnType = ExecutiveSummary;
      return this.apiClient.callApi(
        '/pim-svc/employees/{employeeId}/executive-summaries', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteExecutiveSummary operation.
     * @callback module:api/ExecutiveSummaryApi~deleteExecutiveSummaryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete executive summary.
     * @param {String} employeeId 
     * @param {String} executiveSummaryId 
     * @param {String} authorization 
     * @param {module:api/ExecutiveSummaryApi~deleteExecutiveSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteExecutiveSummary(employeeId, executiveSummaryId, authorization, callback) {
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling deleteExecutiveSummary");
      }
      // verify the required parameter 'executiveSummaryId' is set
      if (executiveSummaryId === undefined || executiveSummaryId === null) {
        throw new Error("Missing the required parameter 'executiveSummaryId' when calling deleteExecutiveSummary");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteExecutiveSummary");
      }

      let pathParams = {
        'employeeId': employeeId,
        'executiveSummaryId': executiveSummaryId
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
        '/pim-svc/employees/{employeeId}/executive-summaries/{executiveSummaryId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getExecutiveSummary operation.
     * @callback module:api/ExecutiveSummaryApi~getExecutiveSummaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExecutiveSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specfic executive summary.
     * @param {String} employeeId 
     * @param {String} executiveSummaryId 
     * @param {String} authorization 
     * @param {module:api/ExecutiveSummaryApi~getExecutiveSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExecutiveSummary}
     */
    getExecutiveSummary(employeeId, executiveSummaryId, authorization, callback) {
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling getExecutiveSummary");
      }
      // verify the required parameter 'executiveSummaryId' is set
      if (executiveSummaryId === undefined || executiveSummaryId === null) {
        throw new Error("Missing the required parameter 'executiveSummaryId' when calling getExecutiveSummary");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getExecutiveSummary");
      }

      let pathParams = {
        'employeeId': employeeId,
        'executiveSummaryId': executiveSummaryId
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
      let returnType = ExecutiveSummary;
      return this.apiClient.callApi(
        '/pim-svc/employees/{employeeId}/executive-summaries/{executiveSummaryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listExecutiveSummaries operation.
     * @callback module:api/ExecutiveSummaryApi~listExecutiveSummariesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ExecutiveSummary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all items of executive summary.
     * @param {String} employeeId 
     * @param {String} authorization 
     * @param {module:api/ExecutiveSummaryApi~listExecutiveSummariesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ExecutiveSummary>}
     */
    listExecutiveSummaries(employeeId, authorization, callback) {
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling listExecutiveSummaries");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling listExecutiveSummaries");
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
      let returnType = [ExecutiveSummary];
      return this.apiClient.callApi(
        '/pim-svc/employees/{employeeId}/executive-summaries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the optionsExecutiveSummaries operation.
     * @callback module:api/ExecutiveSummaryApi~optionsExecutiveSummariesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enforce CORS policy.
     * @param {String} employeeId 
     * @param {String} authorization 
     * @param {module:api/ExecutiveSummaryApi~optionsExecutiveSummariesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    optionsExecutiveSummaries(employeeId, authorization, callback) {
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling optionsExecutiveSummaries");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling optionsExecutiveSummaries");
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
        '/pim-svc/employees/{employeeId}/executive-summaries', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the optionsExecutiveSummaryId operation.
     * @callback module:api/ExecutiveSummaryApi~optionsExecutiveSummaryIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enforce CORS policy.
     * @param {String} employeeId 
     * @param {String} executiveSummaryId 
     * @param {String} authorization 
     * @param {module:api/ExecutiveSummaryApi~optionsExecutiveSummaryIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    optionsExecutiveSummaryId(employeeId, executiveSummaryId, authorization, callback) {
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling optionsExecutiveSummaryId");
      }
      // verify the required parameter 'executiveSummaryId' is set
      if (executiveSummaryId === undefined || executiveSummaryId === null) {
        throw new Error("Missing the required parameter 'executiveSummaryId' when calling optionsExecutiveSummaryId");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling optionsExecutiveSummaryId");
      }

      let pathParams = {
        'employeeId': employeeId,
        'executiveSummaryId': executiveSummaryId
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
        '/pim-svc/employees/{employeeId}/executive-summaries/{executiveSummaryId}', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateExecutiveSummary operation.
     * @callback module:api/ExecutiveSummaryApi~updateExecutiveSummaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExecutiveSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update executive summary.
     * @param {String} employeeId 
     * @param {String} executiveSummaryId 
     * @param {String} authorization 
     * @param {module:model/ExecutiveSummary} executiveSummary Body of executive summary as an object that needs to be updated to entity ExecutiveSummary.
     * @param {module:api/ExecutiveSummaryApi~updateExecutiveSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExecutiveSummary}
     */
    updateExecutiveSummary(employeeId, executiveSummaryId, authorization, executiveSummary, callback) {
      let postBody = executiveSummary;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling updateExecutiveSummary");
      }
      // verify the required parameter 'executiveSummaryId' is set
      if (executiveSummaryId === undefined || executiveSummaryId === null) {
        throw new Error("Missing the required parameter 'executiveSummaryId' when calling updateExecutiveSummary");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling updateExecutiveSummary");
      }
      // verify the required parameter 'executiveSummary' is set
      if (executiveSummary === undefined || executiveSummary === null) {
        throw new Error("Missing the required parameter 'executiveSummary' when calling updateExecutiveSummary");
      }

      let pathParams = {
        'employeeId': employeeId,
        'executiveSummaryId': executiveSummaryId
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
      let returnType = ExecutiveSummary;
      return this.apiClient.callApi(
        '/pim-svc/employees/{employeeId}/executive-summaries/{executiveSummaryId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}