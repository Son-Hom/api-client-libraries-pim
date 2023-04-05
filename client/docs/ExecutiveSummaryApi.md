# Pim.ExecutiveSummaryApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExecutiveSummary**](ExecutiveSummaryApi.md#createExecutiveSummary) | **POST** /pim-svc/employees/{employeeId}/executive-summaries | 
[**deleteExecutiveSummary**](ExecutiveSummaryApi.md#deleteExecutiveSummary) | **DELETE** /pim-svc/employees/{employeeId}/executive-summaries/{executiveSummaryId} | 
[**getExecutiveSummary**](ExecutiveSummaryApi.md#getExecutiveSummary) | **GET** /pim-svc/employees/{employeeId}/executive-summaries/{executiveSummaryId} | 
[**listExecutiveSummaries**](ExecutiveSummaryApi.md#listExecutiveSummaries) | **GET** /pim-svc/employees/{employeeId}/executive-summaries | 
[**optionsExecutiveSummaries**](ExecutiveSummaryApi.md#optionsExecutiveSummaries) | **OPTIONS** /pim-svc/employees/{employeeId}/executive-summaries | Enforce CORS policy.
[**optionsExecutiveSummaryId**](ExecutiveSummaryApi.md#optionsExecutiveSummaryId) | **OPTIONS** /pim-svc/employees/{employeeId}/executive-summaries/{executiveSummaryId} | Enforce CORS policy.
[**updateExecutiveSummary**](ExecutiveSummaryApi.md#updateExecutiveSummary) | **PUT** /pim-svc/employees/{employeeId}/executive-summaries/{executiveSummaryId} | 



## createExecutiveSummary

> ExecutiveSummary createExecutiveSummary(employeeId, authorization, executiveSummary)



Create executive summary.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ExecutiveSummaryApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
let executiveSummary = new Pim.ExecutiveSummary(); // ExecutiveSummary | Body of executive summaries as a object that needs to be added to entity ExecutiveSummary.
apiInstance.createExecutiveSummary(employeeId, authorization, executiveSummary, (error, data, response) => {
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
 **executiveSummary** | [**ExecutiveSummary**](ExecutiveSummary.md)| Body of executive summaries as a object that needs to be added to entity ExecutiveSummary. | 

### Return type

[**ExecutiveSummary**](ExecutiveSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteExecutiveSummary

> deleteExecutiveSummary(employeeId, executiveSummaryId, authorization)



Delete executive summary.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ExecutiveSummaryApi();
let employeeId = "employeeId_example"; // String | 
let executiveSummaryId = "executiveSummaryId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.deleteExecutiveSummary(employeeId, executiveSummaryId, authorization, (error, data, response) => {
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
 **executiveSummaryId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getExecutiveSummary

> ExecutiveSummary getExecutiveSummary(employeeId, executiveSummaryId, authorization)



Get a specfic executive summary.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ExecutiveSummaryApi();
let employeeId = "employeeId_example"; // String | 
let executiveSummaryId = "executiveSummaryId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.getExecutiveSummary(employeeId, executiveSummaryId, authorization, (error, data, response) => {
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
 **executiveSummaryId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

[**ExecutiveSummary**](ExecutiveSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listExecutiveSummaries

> [ExecutiveSummary] listExecutiveSummaries(employeeId, authorization)



List all items of executive summary.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ExecutiveSummaryApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.listExecutiveSummaries(employeeId, authorization, (error, data, response) => {
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

[**[ExecutiveSummary]**](ExecutiveSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## optionsExecutiveSummaries

> Object optionsExecutiveSummaries(employeeId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ExecutiveSummaryApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsExecutiveSummaries(employeeId, authorization, (error, data, response) => {
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


## optionsExecutiveSummaryId

> Object optionsExecutiveSummaryId(employeeId, executiveSummaryId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ExecutiveSummaryApi();
let employeeId = "employeeId_example"; // String | 
let executiveSummaryId = "executiveSummaryId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsExecutiveSummaryId(employeeId, executiveSummaryId, authorization, (error, data, response) => {
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
 **executiveSummaryId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateExecutiveSummary

> ExecutiveSummary updateExecutiveSummary(employeeId, executiveSummaryId, authorization, executiveSummary)



Update executive summary.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ExecutiveSummaryApi();
let employeeId = "employeeId_example"; // String | 
let executiveSummaryId = "executiveSummaryId_example"; // String | 
let authorization = "authorization_example"; // String | 
let executiveSummary = new Pim.ExecutiveSummary(); // ExecutiveSummary | Body of executive summary as an object that needs to be updated to entity ExecutiveSummary.
apiInstance.updateExecutiveSummary(employeeId, executiveSummaryId, authorization, executiveSummary, (error, data, response) => {
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
 **executiveSummaryId** | **String**|  | 
 **authorization** | **String**|  | 
 **executiveSummary** | [**ExecutiveSummary**](ExecutiveSummary.md)| Body of executive summary as an object that needs to be updated to entity ExecutiveSummary. | 

### Return type

[**ExecutiveSummary**](ExecutiveSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

