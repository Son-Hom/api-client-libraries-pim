# Pim.CoreCompetencyApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCoreCompetency**](CoreCompetencyApi.md#createCoreCompetency) | **POST** /pim-svc/employees/{employeeId}/core-competencies | 
[**deleteCoreCompetency**](CoreCompetencyApi.md#deleteCoreCompetency) | **DELETE** /pim-svc/employees/{employeeId}/core-competencies/{coreCompetencyId} | 
[**getCoreCompetency**](CoreCompetencyApi.md#getCoreCompetency) | **GET** /pim-svc/employees/{employeeId}/core-competencies/{coreCompetencyId} | 
[**listCoreCompetencies**](CoreCompetencyApi.md#listCoreCompetencies) | **GET** /pim-svc/employees/{employeeId}/core-competencies | 
[**optionsCoreCompetencies**](CoreCompetencyApi.md#optionsCoreCompetencies) | **OPTIONS** /pim-svc/employees/{employeeId}/core-competencies | Enforce CORS policy.
[**optionsCoreCompetencyId**](CoreCompetencyApi.md#optionsCoreCompetencyId) | **OPTIONS** /pim-svc/employees/{employeeId}/core-competencies/{coreCompetencyId} | Enforce CORS policy.
[**updateCoreCompetency**](CoreCompetencyApi.md#updateCoreCompetency) | **PUT** /pim-svc/employees/{employeeId}/core-competencies/{coreCompetencyId} | 



## createCoreCompetency

> CoreCompetency createCoreCompetency(employeeId, authorization, coreCompetency)



Create core competency.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.CoreCompetencyApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
let coreCompetency = new Pim.CoreCompetency(); // CoreCompetency | Body of core competency as a object that needs to be added to entity CoreCompetency.
apiInstance.createCoreCompetency(employeeId, authorization, coreCompetency, (error, data, response) => {
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
 **coreCompetency** | [**CoreCompetency**](CoreCompetency.md)| Body of core competency as a object that needs to be added to entity CoreCompetency. | 

### Return type

[**CoreCompetency**](CoreCompetency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCoreCompetency

> deleteCoreCompetency(employeeId, coreCompetencyId, authorization)



Delete core competency.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.CoreCompetencyApi();
let employeeId = "employeeId_example"; // String | 
let coreCompetencyId = "coreCompetencyId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.deleteCoreCompetency(employeeId, coreCompetencyId, authorization, (error, data, response) => {
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
 **coreCompetencyId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCoreCompetency

> CoreCompetency getCoreCompetency(employeeId, coreCompetencyId, authorization)



Get a specfic core competency.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.CoreCompetencyApi();
let employeeId = "employeeId_example"; // String | 
let coreCompetencyId = "coreCompetencyId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.getCoreCompetency(employeeId, coreCompetencyId, authorization, (error, data, response) => {
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
 **coreCompetencyId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

[**CoreCompetency**](CoreCompetency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCoreCompetencies

> [CoreCompetency] listCoreCompetencies(employeeId, authorization)



List all items of core competency.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.CoreCompetencyApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.listCoreCompetencies(employeeId, authorization, (error, data, response) => {
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

[**[CoreCompetency]**](CoreCompetency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## optionsCoreCompetencies

> Object optionsCoreCompetencies(employeeId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.CoreCompetencyApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsCoreCompetencies(employeeId, authorization, (error, data, response) => {
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


## optionsCoreCompetencyId

> Object optionsCoreCompetencyId(employeeId, coreCompetencyId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.CoreCompetencyApi();
let employeeId = "employeeId_example"; // String | 
let coreCompetencyId = "coreCompetencyId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsCoreCompetencyId(employeeId, coreCompetencyId, authorization, (error, data, response) => {
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
 **coreCompetencyId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCoreCompetency

> CoreCompetency updateCoreCompetency(employeeId, coreCompetencyId, authorization, coreCompetency)



Update core competency.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.CoreCompetencyApi();
let employeeId = "employeeId_example"; // String | 
let coreCompetencyId = "coreCompetencyId_example"; // String | 
let authorization = "authorization_example"; // String | 
let coreCompetency = new Pim.CoreCompetency(); // CoreCompetency | Body of core competency as an object that needs to be updated to entity CoreCompetency.
apiInstance.updateCoreCompetency(employeeId, coreCompetencyId, authorization, coreCompetency, (error, data, response) => {
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
 **coreCompetencyId** | **String**|  | 
 **authorization** | **String**|  | 
 **coreCompetency** | [**CoreCompetency**](CoreCompetency.md)| Body of core competency as an object that needs to be updated to entity CoreCompetency. | 

### Return type

[**CoreCompetency**](CoreCompetency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

