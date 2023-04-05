# Pim.BioDataApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBioData**](BioDataApi.md#createBioData) | **POST** /pim-svc/employees/{employeeId}/bio-data | 
[**deleteBioData**](BioDataApi.md#deleteBioData) | **DELETE** /pim-svc/employees/{employeeId}/bio-data/{bioDataId} | 
[**getBioData**](BioDataApi.md#getBioData) | **GET** /pim-svc/employees/{employeeId}/bio-data/{bioDataId} | 
[**listBioData**](BioDataApi.md#listBioData) | **GET** /pim-svc/employees/{employeeId}/bio-data | 
[**optionsBioData**](BioDataApi.md#optionsBioData) | **OPTIONS** /pim-svc/employees/{employeeId}/bio-data | Enforce CORS policy.
[**optionsBioDataId**](BioDataApi.md#optionsBioDataId) | **OPTIONS** /pim-svc/employees/{employeeId}/bio-data/{bioDataId} | Enforce CORS policy.
[**updateBioData**](BioDataApi.md#updateBioData) | **PUT** /pim-svc/employees/{employeeId}/bio-data/{bioDataId} | 



## createBioData

> BioData createBioData(employeeId, authorization, bioData)



create bio data.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.BioDataApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
let bioData = new Pim.BioData(); // BioData | Body of bio data as a object that needs to be added to entity BioData.
apiInstance.createBioData(employeeId, authorization, bioData, (error, data, response) => {
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
 **bioData** | [**BioData**](BioData.md)| Body of bio data as a object that needs to be added to entity BioData. | 

### Return type

[**BioData**](BioData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBioData

> Object deleteBioData(employeeId, bioDataId, authorization)



Delete bio date.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.BioDataApi();
let employeeId = "employeeId_example"; // String | 
let bioDataId = "bioDataId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.deleteBioData(employeeId, bioDataId, authorization, (error, data, response) => {
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
 **bioDataId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBioData

> BioData getBioData(employeeId, bioDataId, authorization)



Get a specfic bio data.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.BioDataApi();
let employeeId = "employeeId_example"; // String | 
let bioDataId = "bioDataId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.getBioData(employeeId, bioDataId, authorization, (error, data, response) => {
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
 **bioDataId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

[**BioData**](BioData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBioData

> [BioData] listBioData(employeeId, authorization)



List all items of bio data.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.BioDataApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.listBioData(employeeId, authorization, (error, data, response) => {
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

[**[BioData]**](BioData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## optionsBioData

> Object optionsBioData(employeeId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.BioDataApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsBioData(employeeId, authorization, (error, data, response) => {
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


## optionsBioDataId

> Object optionsBioDataId(employeeId, bioDataId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.BioDataApi();
let employeeId = "employeeId_example"; // String | 
let bioDataId = "bioDataId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsBioDataId(employeeId, bioDataId, authorization, (error, data, response) => {
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
 **bioDataId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateBioData

> BioData updateBioData(employeeId, bioDataId, authorization, bioData)



Update bio data.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.BioDataApi();
let employeeId = "employeeId_example"; // String | 
let bioDataId = "bioDataId_example"; // String | 
let authorization = "authorization_example"; // String | 
let bioData = new Pim.BioData(); // BioData | Body of bio data as a object that needs to be updated to entity BioData.
apiInstance.updateBioData(employeeId, bioDataId, authorization, bioData, (error, data, response) => {
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
 **bioDataId** | **String**|  | 
 **authorization** | **String**|  | 
 **bioData** | [**BioData**](BioData.md)| Body of bio data as a object that needs to be updated to entity BioData. | 

### Return type

[**BioData**](BioData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

