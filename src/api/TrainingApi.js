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
import Training from '../model/Training';

/**
* Training service.
* @module api/TrainingApi
* @version 1.0.0
*/
export default class TrainingApi {

    /**
    * Constructs a new TrainingApi. 
    * @alias module:api/TrainingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createTraining operation.
     * @callback module:api/TrainingApi~createTrainingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Training} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create training.
     * @param {String} employeeId 
     * @param {String} authorization 
     * @param {module:model/Training} training Body of training as a object that needs to be added to entity Training.
     * @param {module:api/TrainingApi~createTrainingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Training}
     */
    createTraining(employeeId, authorization, training, callback) {
      let postBody = training;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling createTraining");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling createTraining");
      }
      // verify the required parameter 'training' is set
      if (training === undefined || training === null) {
        throw new Error("Missing the required parameter 'training' when calling createTraining");
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
      let returnType = Training;
      return this.apiClient.callApi(
        '/pim-svc/employees/{employeeId}/trainings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTraining operation.
     * @callback module:api/TrainingApi~deleteTrainingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete training.
     * @param {String} employeeId 
     * @param {String} trainingId 
     * @param {String} authorization 
     * @param {module:api/TrainingApi~deleteTrainingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteTraining(employeeId, trainingId, authorization, callback) {
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling deleteTraining");
      }
      // verify the required parameter 'trainingId' is set
      if (trainingId === undefined || trainingId === null) {
        throw new Error("Missing the required parameter 'trainingId' when calling deleteTraining");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteTraining");
      }

      let pathParams = {
        'employeeId': employeeId,
        'trainingId': trainingId
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
        '/pim-svc/employees/{employeeId}/trainings/{trainingId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTraining operation.
     * @callback module:api/TrainingApi~getTrainingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Training} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specfic training.
     * @param {String} employeeId 
     * @param {String} trainingId 
     * @param {String} authorization 
     * @param {module:api/TrainingApi~getTrainingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Training}
     */
    getTraining(employeeId, trainingId, authorization, callback) {
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling getTraining");
      }
      // verify the required parameter 'trainingId' is set
      if (trainingId === undefined || trainingId === null) {
        throw new Error("Missing the required parameter 'trainingId' when calling getTraining");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getTraining");
      }

      let pathParams = {
        'employeeId': employeeId,
        'trainingId': trainingId
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
      let returnType = Training;
      return this.apiClient.callApi(
        '/pim-svc/employees/{employeeId}/trainings/{trainingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listTrainings operation.
     * @callback module:api/TrainingApi~listTrainingsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Training>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all items of training.
     * @param {String} employeeId 
     * @param {String} authorization 
     * @param {Object} opts Optional parameters
     * @param {String} [courseTitle] 
     * @param {String} [organizerName] 
     * @param {String} [fromDate] 
     * @param {String} [toDate] 
     * @param {Number} [numberOfDays] 
     * @param {String} [location] 
     * @param {module:api/TrainingApi~listTrainingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Training>}
     */
    listTrainings(employeeId, authorization, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling listTrainings");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling listTrainings");
      }

      let pathParams = {
        'employeeId': employeeId
      };
      let queryParams = {
        'CourseTitle': opts['courseTitle'],
        'Organizer.Name': opts['organizerName'],
        'FromDate': opts['fromDate'],
        'ToDate': opts['toDate'],
        'NumberOfDays': opts['numberOfDays'],
        'Location': opts['location']
      };
      let headerParams = {
        'authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Training];
      return this.apiClient.callApi(
        '/pim-svc/employees/{employeeId}/trainings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the optionsTrainingId operation.
     * @callback module:api/TrainingApi~optionsTrainingIdCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enforce CORS policy.
     * @param {String} employeeId 
     * @param {String} trainingId 
     * @param {String} authorization 
     * @param {module:api/TrainingApi~optionsTrainingIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    optionsTrainingId(employeeId, trainingId, authorization, callback) {
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling optionsTrainingId");
      }
      // verify the required parameter 'trainingId' is set
      if (trainingId === undefined || trainingId === null) {
        throw new Error("Missing the required parameter 'trainingId' when calling optionsTrainingId");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling optionsTrainingId");
      }

      let pathParams = {
        'employeeId': employeeId,
        'trainingId': trainingId
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
        '/pim-svc/employees/{employeeId}/trainings/{trainingId}', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the optionsTrainings operation.
     * @callback module:api/TrainingApi~optionsTrainingsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enforce CORS policy.
     * @param {String} employeeId 
     * @param {String} authorization 
     * @param {module:api/TrainingApi~optionsTrainingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    optionsTrainings(employeeId, authorization, callback) {
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling optionsTrainings");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling optionsTrainings");
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
        '/pim-svc/employees/{employeeId}/trainings', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTraining operation.
     * @callback module:api/TrainingApi~updateTrainingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Training} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update training.
     * @param {String} employeeId 
     * @param {String} trainingId 
     * @param {String} authorization 
     * @param {module:model/Training} training Body of training as an object that needs to be updated to entity Training.
     * @param {module:api/TrainingApi~updateTrainingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Training}
     */
    updateTraining(employeeId, trainingId, authorization, training, callback) {
      let postBody = training;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling updateTraining");
      }
      // verify the required parameter 'trainingId' is set
      if (trainingId === undefined || trainingId === null) {
        throw new Error("Missing the required parameter 'trainingId' when calling updateTraining");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling updateTraining");
      }
      // verify the required parameter 'training' is set
      if (training === undefined || training === null) {
        throw new Error("Missing the required parameter 'training' when calling updateTraining");
      }

      let pathParams = {
        'employeeId': employeeId,
        'trainingId': trainingId
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
      let returnType = Training;
      return this.apiClient.callApi(
        '/pim-svc/employees/{employeeId}/trainings/{trainingId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
