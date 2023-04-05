# Pim.TrainingApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTraining**](TrainingApi.md#createTraining) | **POST** /pim-svc/employees/{employeeId}/trainings | 
[**deleteTraining**](TrainingApi.md#deleteTraining) | **DELETE** /pim-svc/employees/{employeeId}/trainings/{trainingId} | 
[**getTraining**](TrainingApi.md#getTraining) | **GET** /pim-svc/employees/{employeeId}/trainings/{trainingId} | 
[**listTrainings**](TrainingApi.md#listTrainings) | **GET** /pim-svc/employees/{employeeId}/trainings | 
[**optionsTrainingId**](TrainingApi.md#optionsTrainingId) | **OPTIONS** /pim-svc/employees/{employeeId}/trainings/{trainingId} | Enforce CORS policy.
[**optionsTrainings**](TrainingApi.md#optionsTrainings) | **OPTIONS** /pim-svc/employees/{employeeId}/trainings | Enforce CORS policy.
[**updateTraining**](TrainingApi.md#updateTraining) | **PUT** /pim-svc/employees/{employeeId}/trainings/{trainingId} | 



## createTraining

> Training createTraining(employeeId, authorization, training)



Create training.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.TrainingApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
let training = new Pim.Training(); // Training | Body of training as a object that needs to be added to entity Training.
apiInstance.createTraining(employeeId, authorization, training, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | **String**|  | 
 **authorization** | **String**|  | 
 **training** | [**Training**](Training.md)| Body of training as a object that needs to be added to entity Training. | 

### Return type

[**Training**](Training.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTraining

> deleteTraining(employeeId, trainingId, authorization)



Delete training.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.TrainingApi();
let employeeId = "employeeId_example"; // String | 
let trainingId = "trainingId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.deleteTraining(employeeId, trainingId, authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | **String**|  | 
 **trainingId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getTraining

> Training getTraining(employeeId, trainingId, authorization)



Get a specfic training.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.TrainingApi();
let employeeId = "employeeId_example"; // String | 
let trainingId = "trainingId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.getTraining(employeeId, trainingId, authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | **String**|  | 
 **trainingId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

[**Training**](Training.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTrainings

> [Training] listTrainings(employeeId, authorization, opts)



List all items of training.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.TrainingApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
let opts = {
  'courseTitle': "courseTitle_example", // String | 
  'organizerName': "organizerName_example", // String | 
  'fromDate': "fromDate_example", // String | 
  'toDate': "toDate_example", // String | 
  'numberOfDays': 3.4, // Number | 
  'location': "location_example" // String | 
};
apiInstance.listTrainings(employeeId, authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | **String**|  | 
 **authorization** | **String**|  | 
 **courseTitle** | **String**|  | [optional] 
 **organizerName** | **String**|  | [optional] 
 **fromDate** | **String**|  | [optional] 
 **toDate** | **String**|  | [optional] 
 **numberOfDays** | **Number**|  | [optional] 
 **location** | **String**|  | [optional] 

### Return type

[**[Training]**](Training.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## optionsTrainingId

> Object optionsTrainingId(employeeId, trainingId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.TrainingApi();
let employeeId = "employeeId_example"; // String | 
let trainingId = "trainingId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsTrainingId(employeeId, trainingId, authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | **String**|  | 
 **trainingId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## optionsTrainings

> Object optionsTrainings(employeeId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.TrainingApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsTrainings(employeeId, authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTraining

> Training updateTraining(employeeId, trainingId, authorization, training)



Update training.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.TrainingApi();
let employeeId = "employeeId_example"; // String | 
let trainingId = "trainingId_example"; // String | 
let authorization = "authorization_example"; // String | 
let training = new Pim.Training(); // Training | Body of training as an object that needs to be updated to entity Training.
apiInstance.updateTraining(employeeId, trainingId, authorization, training, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | **String**|  | 
 **trainingId** | **String**|  | 
 **authorization** | **String**|  | 
 **training** | [**Training**](Training.md)| Body of training as an object that needs to be updated to entity Training. | 

### Return type

[**Training**](Training.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

