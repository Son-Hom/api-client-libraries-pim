# Pim.LanguageApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLanguage**](LanguageApi.md#createLanguage) | **POST** /pim-svc/employees/{employeeId}/languages | 
[**deleteLanguage**](LanguageApi.md#deleteLanguage) | **DELETE** /pim-svc/employees/{employeeId}/languages/{languageId} | 
[**getLanguage**](LanguageApi.md#getLanguage) | **GET** /pim-svc/employees/{employeeId}/languages/{languageId} | 
[**listLanguages**](LanguageApi.md#listLanguages) | **GET** /pim-svc/employees/{employeeId}/languages | 
[**optionsLanguageId**](LanguageApi.md#optionsLanguageId) | **OPTIONS** /pim-svc/employees/{employeeId}/languages/{languageId} | Enforce CORS policy.
[**optionsLanguages**](LanguageApi.md#optionsLanguages) | **OPTIONS** /pim-svc/employees/{employeeId}/languages | Enforce CORS policy.
[**updateLanguage**](LanguageApi.md#updateLanguage) | **PUT** /pim-svc/employees/{employeeId}/languages/{languageId} | 



## createLanguage

> Language createLanguage(employeeId, authorization, language)



Create Language.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.LanguageApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
let language = new Pim.Language(); // Language | Body of executive summaries as a object that needs to be added to entity Language.
apiInstance.createLanguage(employeeId, authorization, language, (error, data, response) => {
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
 **language** | [**Language**](Language.md)| Body of executive summaries as a object that needs to be added to entity Language. | 

### Return type

[**Language**](Language.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteLanguage

> deleteLanguage(employeeId, languageId, authorization)



Delete language.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.LanguageApi();
let employeeId = "employeeId_example"; // String | 
let languageId = "languageId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.deleteLanguage(employeeId, languageId, authorization, (error, data, response) => {
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
 **languageId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getLanguage

> Language getLanguage(employeeId, languageId, authorization)



Get a specfic language.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.LanguageApi();
let employeeId = "employeeId_example"; // String | 
let languageId = "languageId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.getLanguage(employeeId, languageId, authorization, (error, data, response) => {
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
 **languageId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

[**Language**](Language.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLanguages

> [Language] listLanguages(employeeId, authorization, opts)



List all items of language.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.LanguageApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
let opts = {
  'language': "language_example", // String | 
  'speakingLevel': "speakingLevel_example", // String | 
  'writingLevel': "writingLevel_example", // String | 
  'listeningLevel': "listeningLevel_example", // String | 
  'readingLevel': "readingLevel_example", // String | 
  'overallLevel': "overallLevel_example" // String | 
};
apiInstance.listLanguages(employeeId, authorization, opts, (error, data, response) => {
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
 **language** | **String**|  | [optional] 
 **speakingLevel** | **String**|  | [optional] 
 **writingLevel** | **String**|  | [optional] 
 **listeningLevel** | **String**|  | [optional] 
 **readingLevel** | **String**|  | [optional] 
 **overallLevel** | **String**|  | [optional] 

### Return type

[**[Language]**](Language.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## optionsLanguageId

> Object optionsLanguageId(employeeId, languageId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.LanguageApi();
let employeeId = "employeeId_example"; // String | 
let languageId = "languageId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsLanguageId(employeeId, languageId, authorization, (error, data, response) => {
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
 **languageId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## optionsLanguages

> Object optionsLanguages(employeeId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.LanguageApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsLanguages(employeeId, authorization, (error, data, response) => {
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


## updateLanguage

> Language updateLanguage(employeeId, languageId, authorization, language)



Update Language.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.LanguageApi();
let employeeId = "employeeId_example"; // String | 
let languageId = "languageId_example"; // String | 
let authorization = "authorization_example"; // String | 
let language = new Pim.Language(); // Language | Body of language as an object that needs to be updated to entity Language.
apiInstance.updateLanguage(employeeId, languageId, authorization, language, (error, data, response) => {
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
 **languageId** | **String**|  | 
 **authorization** | **String**|  | 
 **language** | [**Language**](Language.md)| Body of language as an object that needs to be updated to entity Language. | 

### Return type

[**Language**](Language.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

