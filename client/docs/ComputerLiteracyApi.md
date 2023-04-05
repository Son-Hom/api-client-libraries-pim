# Pim.ComputerLiteracyApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createComputerLiteracy**](ComputerLiteracyApi.md#createComputerLiteracy) | **POST** /pim-svc/employees/{employeeId}/computer-literacies | 
[**deleteComputerLiteracy**](ComputerLiteracyApi.md#deleteComputerLiteracy) | **DELETE** /pim-svc/employees/{employeeId}/computer-literacies/{ComputerLiteracyId} | 
[**getComputerLiteracy**](ComputerLiteracyApi.md#getComputerLiteracy) | **GET** /pim-svc/employees/{employeeId}/computer-literacies/{ComputerLiteracyId} | 
[**listComputerLiteracies**](ComputerLiteracyApi.md#listComputerLiteracies) | **GET** /pim-svc/employees/{employeeId}/computer-literacies | 
[**optionsComputerLiteracies**](ComputerLiteracyApi.md#optionsComputerLiteracies) | **OPTIONS** /pim-svc/employees/{employeeId}/computer-literacies | Enforce CORS policy.
[**optionsComputerLiteracyId**](ComputerLiteracyApi.md#optionsComputerLiteracyId) | **OPTIONS** /pim-svc/employees/{employeeId}/computer-literacies/{ComputerLiteracyId} | Enforce CORS policy.
[**updateComputerLiteracy**](ComputerLiteracyApi.md#updateComputerLiteracy) | **PUT** /pim-svc/employees/{employeeId}/computer-literacies/{ComputerLiteracyId} | 



## createComputerLiteracy

> ComputerLiteracy createComputerLiteracy(employeeId, authorization, computerLiteracy)



Create ComputerLiteracy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ComputerLiteracyApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
let computerLiteracy = new Pim.ComputerLiteracy(); // ComputerLiteracy | Body of executive summaries as a object that needs to be added to entity ComputerLiteracy.
apiInstance.createComputerLiteracy(employeeId, authorization, computerLiteracy, (error, data, response) => {
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
 **computerLiteracy** | [**ComputerLiteracy**](ComputerLiteracy.md)| Body of executive summaries as a object that needs to be added to entity ComputerLiteracy. | 

### Return type

[**ComputerLiteracy**](ComputerLiteracy.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteComputerLiteracy

> deleteComputerLiteracy(employeeId, computerLiteracyId, authorization)



Delete computerLiteracy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ComputerLiteracyApi();
let employeeId = "employeeId_example"; // String | 
let computerLiteracyId = "computerLiteracyId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.deleteComputerLiteracy(employeeId, computerLiteracyId, authorization, (error, data, response) => {
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
 **computerLiteracyId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getComputerLiteracy

> ComputerLiteracy getComputerLiteracy(employeeId, computerLiteracyId, authorization)



Get a specfic computer literacy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ComputerLiteracyApi();
let employeeId = "employeeId_example"; // String | 
let computerLiteracyId = "computerLiteracyId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.getComputerLiteracy(employeeId, computerLiteracyId, authorization, (error, data, response) => {
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
 **computerLiteracyId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

[**ComputerLiteracy**](ComputerLiteracy.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listComputerLiteracies

> [ComputerLiteracy] listComputerLiteracies(employeeId, authorization, opts)



List all items of ComputerLiteracy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ComputerLiteracyApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
let opts = {
  'softwareApplication': "softwareApplication_example", // String | 
  'level': "level_example" // String | 
};
apiInstance.listComputerLiteracies(employeeId, authorization, opts, (error, data, response) => {
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
 **softwareApplication** | **String**|  | [optional] 
 **level** | **String**|  | [optional] 

### Return type

[**[ComputerLiteracy]**](ComputerLiteracy.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## optionsComputerLiteracies

> Object optionsComputerLiteracies(employeeId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ComputerLiteracyApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsComputerLiteracies(employeeId, authorization, (error, data, response) => {
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


## optionsComputerLiteracyId

> Object optionsComputerLiteracyId(employeeId, computerLiteracyId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ComputerLiteracyApi();
let employeeId = "employeeId_example"; // String | 
let computerLiteracyId = "computerLiteracyId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsComputerLiteracyId(employeeId, computerLiteracyId, authorization, (error, data, response) => {
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
 **computerLiteracyId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateComputerLiteracy

> ComputerLiteracy updateComputerLiteracy(employeeId, computerLiteracyId, authorization, computerLiteracy)



Update computer literacy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ComputerLiteracyApi();
let employeeId = "employeeId_example"; // String | 
let computerLiteracyId = "computerLiteracyId_example"; // String | 
let authorization = "authorization_example"; // String | 
let computerLiteracy = new Pim.ComputerLiteracy(); // ComputerLiteracy | Body of computerLiteracy as an object that needs to be updated to entity ComputerLiteracy.
apiInstance.updateComputerLiteracy(employeeId, computerLiteracyId, authorization, computerLiteracy, (error, data, response) => {
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
 **computerLiteracyId** | **String**|  | 
 **authorization** | **String**|  | 
 **computerLiteracy** | [**ComputerLiteracy**](ComputerLiteracy.md)| Body of computerLiteracy as an object that needs to be updated to entity ComputerLiteracy. | 

### Return type

[**ComputerLiteracy**](ComputerLiteracy.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

