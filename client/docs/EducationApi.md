# Pim.EducationApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEducation**](EducationApi.md#createEducation) | **POST** /pim-svc/employees/{employeeId}/educations | 
[**deleteEducation**](EducationApi.md#deleteEducation) | **DELETE** /pim-svc/employees/{employeeId}/educations/{educationId} | 
[**getEducation**](EducationApi.md#getEducation) | **GET** /pim-svc/employees/{employeeId}/educations/{educationId} | 
[**listEducations**](EducationApi.md#listEducations) | **GET** /pim-svc/employees/{employeeId}/educations | 
[**optionsEducationId**](EducationApi.md#optionsEducationId) | **OPTIONS** /pim-svc/employees/{employeeId}/educations/{educationId} | Enforce CORS policy.
[**optionsEducations**](EducationApi.md#optionsEducations) | **OPTIONS** /pim-svc/employees/{employeeId}/educations | Enforce CORS policy.
[**updateEducation**](EducationApi.md#updateEducation) | **PUT** /pim-svc/employees/{employeeId}/educations/{educationId} | 



## createEducation

> Education createEducation(employeeId, authorization, education)



Create educations.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.EducationApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
let education = new Pim.Education(); // Education | Body of education as a object that needs to be added to entity Education.
apiInstance.createEducation(employeeId, authorization, education, (error, data, response) => {
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
 **education** | [**Education**](Education.md)| Body of education as a object that needs to be added to entity Education. | 

### Return type

[**Education**](Education.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEducation

> deleteEducation(employeeId, educationId, authorization)



Delete education.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.EducationApi();
let employeeId = "employeeId_example"; // String | 
let educationId = "educationId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.deleteEducation(employeeId, educationId, authorization, (error, data, response) => {
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
 **educationId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getEducation

> Education getEducation(employeeId, educationId, authorization)



Get a specfic education.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.EducationApi();
let employeeId = "employeeId_example"; // String | 
let educationId = "educationId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.getEducation(employeeId, educationId, authorization, (error, data, response) => {
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
 **educationId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

[**Education**](Education.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEducations

> [Education] listEducations(employeeId, authorization, opts)



List all items of education.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.EducationApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
let opts = {
  'fromYear': "fromYear_example", // String | 
  'toYear': "toYear_example", // String | 
  'schoolName': "schoolName_example", // String | 
  'degree': "degree_example", // String | 
  'fieldOfStudy': "fieldOfStudy_example", // String | 
  'major': "major_example" // String | 
};
apiInstance.listEducations(employeeId, authorization, opts, (error, data, response) => {
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
 **fromYear** | **String**|  | [optional] 
 **toYear** | **String**|  | [optional] 
 **schoolName** | **String**|  | [optional] 
 **degree** | **String**|  | [optional] 
 **fieldOfStudy** | **String**|  | [optional] 
 **major** | **String**|  | [optional] 

### Return type

[**[Education]**](Education.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## optionsEducationId

> Object optionsEducationId(employeeId, educationId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.EducationApi();
let employeeId = "employeeId_example"; // String | 
let educationId = "educationId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsEducationId(employeeId, educationId, authorization, (error, data, response) => {
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
 **educationId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## optionsEducations

> Object optionsEducations(employeeId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.EducationApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsEducations(employeeId, authorization, (error, data, response) => {
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


## updateEducation

> Education updateEducation(employeeId, educationId, authorization, education)



Update education.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.EducationApi();
let employeeId = "employeeId_example"; // String | 
let educationId = "educationId_example"; // String | 
let authorization = "authorization_example"; // String | 
let education = new Pim.Education(); // Education | Body of education as an object that needs to be updated to entity Education.
apiInstance.updateEducation(employeeId, educationId, authorization, education, (error, data, response) => {
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
 **educationId** | **String**|  | 
 **authorization** | **String**|  | 
 **education** | [**Education**](Education.md)| Body of education as an object that needs to be updated to entity Education. | 

### Return type

[**Education**](Education.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

