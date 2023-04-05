# Pim.WorkExperienceApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWorkExperience**](WorkExperienceApi.md#createWorkExperience) | **POST** /pim-svc/employees/{employeeId}/work-experiences | 
[**deleteWorkExperience**](WorkExperienceApi.md#deleteWorkExperience) | **DELETE** /pim-svc/employees/{employeeId}/work-experiences/{workExperienceId} | 
[**getWorkExperience**](WorkExperienceApi.md#getWorkExperience) | **GET** /pim-svc/employees/{employeeId}/work-experiences/{workExperienceId} | 
[**listWorkExperiences**](WorkExperienceApi.md#listWorkExperiences) | **GET** /pim-svc/employees/{employeeId}/work-experiences | 
[**optionsWorkExperienceId**](WorkExperienceApi.md#optionsWorkExperienceId) | **OPTIONS** /pim-svc/employees/{employeeId}/work-experiences/{workExperienceId} | Enforce CORS policy.
[**optionsWorkExperiences**](WorkExperienceApi.md#optionsWorkExperiences) | **OPTIONS** /pim-svc/employees/{employeeId}/work-experiences | Enforce CORS policy.
[**updateWorkExperience**](WorkExperienceApi.md#updateWorkExperience) | **PUT** /pim-svc/employees/{employeeId}/work-experiences/{workExperienceId} | 



## createWorkExperience

> WorkExperience createWorkExperience(employeeId, authorization, workExperience)



Create work experience.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.WorkExperienceApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
let workExperience = new Pim.WorkExperience(); // WorkExperience | Body of work experience as a object that needs to be added to entity WorkExperience.
apiInstance.createWorkExperience(employeeId, authorization, workExperience, (error, data, response) => {
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
 **workExperience** | [**WorkExperience**](WorkExperience.md)| Body of work experience as a object that needs to be added to entity WorkExperience. | 

### Return type

[**WorkExperience**](WorkExperience.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWorkExperience

> deleteWorkExperience(employeeId, workExperienceId, authorization)



Delete work experience.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.WorkExperienceApi();
let employeeId = "employeeId_example"; // String | 
let workExperienceId = "workExperienceId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.deleteWorkExperience(employeeId, workExperienceId, authorization, (error, data, response) => {
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
 **workExperienceId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getWorkExperience

> WorkExperience getWorkExperience(employeeId, workExperienceId, authorization)



Get a specfic work experience.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.WorkExperienceApi();
let employeeId = "employeeId_example"; // String | 
let workExperienceId = "workExperienceId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.getWorkExperience(employeeId, workExperienceId, authorization, (error, data, response) => {
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
 **workExperienceId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

[**WorkExperience**](WorkExperience.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listWorkExperiences

> [WorkExperience] listWorkExperiences(employeeId, authorization, opts)



List all items of Work experience.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.WorkExperienceApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
let opts = {
  'fromDate': "fromDate_example", // String | 
  'toDate': "toDate_example", // String | 
  'employer': "employer_example", // String | 
  'positionTitle': "positionTitle_example" // String | 
};
apiInstance.listWorkExperiences(employeeId, authorization, opts, (error, data, response) => {
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
 **fromDate** | **String**|  | [optional] 
 **toDate** | **String**|  | [optional] 
 **employer** | **String**|  | [optional] 
 **positionTitle** | **String**|  | [optional] 

### Return type

[**[WorkExperience]**](WorkExperience.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## optionsWorkExperienceId

> Object optionsWorkExperienceId(employeeId, workExperienceId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.WorkExperienceApi();
let employeeId = "employeeId_example"; // String | 
let workExperienceId = "workExperienceId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsWorkExperienceId(employeeId, workExperienceId, authorization, (error, data, response) => {
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
 **workExperienceId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## optionsWorkExperiences

> Object optionsWorkExperiences(employeeId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.WorkExperienceApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsWorkExperiences(employeeId, authorization, (error, data, response) => {
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


## updateWorkExperience

> WorkExperience updateWorkExperience(employeeId, workExperienceId, authorization, workExperience)



Update work experience.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.WorkExperienceApi();
let employeeId = "employeeId_example"; // String | 
let workExperienceId = "workExperienceId_example"; // String | 
let authorization = "authorization_example"; // String | 
let workExperience = new Pim.WorkExperience(); // WorkExperience | Body of work experience as an object that needs to be updated to entity WorkExperience.
apiInstance.updateWorkExperience(employeeId, workExperienceId, authorization, workExperience, (error, data, response) => {
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
 **workExperienceId** | **String**|  | 
 **authorization** | **String**|  | 
 **workExperience** | [**WorkExperience**](WorkExperience.md)| Body of work experience as an object that needs to be updated to entity WorkExperience. | 

### Return type

[**WorkExperience**](WorkExperience.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

