# Pim.ContactApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContact**](ContactApi.md#createContact) | **POST** /pim-svc/employees/{employeeId}/contacts | 
[**deleteContact**](ContactApi.md#deleteContact) | **DELETE** /pim-svc/employees/{employeeId}/contacts/{contactId} | 
[**getContact**](ContactApi.md#getContact) | **GET** /pim-svc/employees/{employeeId}/contacts/{contactId} | 
[**listContacts**](ContactApi.md#listContacts) | **GET** /pim-svc/employees/{employeeId}/contacts | 
[**optionsContactId**](ContactApi.md#optionsContactId) | **OPTIONS** /pim-svc/employees/{employeeId}/contacts/{contactId} | Enforce CORS policy.
[**optionsContacts**](ContactApi.md#optionsContacts) | **OPTIONS** /pim-svc/employees/{employeeId}/contacts | Enforce CORS policy.
[**updateContact**](ContactApi.md#updateContact) | **PUT** /pim-svc/employees/{employeeId}/contacts/{contactId} | 



## createContact

> Contact createContact(employeeId, authorization, contact)



create contact.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ContactApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
let contact = new Pim.Contact(); // Contact | Body of contact as a object that needs to be added to entity contact.
apiInstance.createContact(employeeId, authorization, contact, (error, data, response) => {
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
 **contact** | [**Contact**](Contact.md)| Body of contact as a object that needs to be added to entity contact. | 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteContact

> deleteContact(employeeId, contactId, authorization)



Delete contact.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ContactApi();
let employeeId = "employeeId_example"; // String | 
let contactId = "contactId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.deleteContact(employeeId, contactId, authorization, (error, data, response) => {
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
 **contactId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getContact

> Contact getContact(employeeId, contactId, authorization)



Get a specfic contact.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ContactApi();
let employeeId = "employeeId_example"; // String | 
let contactId = "contactId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.getContact(employeeId, contactId, authorization, (error, data, response) => {
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
 **contactId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listContacts

> [Contact] listContacts(employeeId, authorization, opts)



List all items of contact.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ContactApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
let opts = {
  'type': "type_example", // String | 
  'value': "value_example" // String | 
};
apiInstance.listContacts(employeeId, authorization, opts, (error, data, response) => {
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
 **type** | **String**|  | [optional] 
 **value** | **String**|  | [optional] 

### Return type

[**[Contact]**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## optionsContactId

> Object optionsContactId(employeeId, contactId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ContactApi();
let employeeId = "employeeId_example"; // String | 
let contactId = "contactId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsContactId(employeeId, contactId, authorization, (error, data, response) => {
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
 **contactId** | **String**|  | 
 **authorization** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## optionsContacts

> Object optionsContacts(employeeId, authorization)

Enforce CORS policy.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ContactApi();
let employeeId = "employeeId_example"; // String | 
let authorization = "authorization_example"; // String | 
apiInstance.optionsContacts(employeeId, authorization, (error, data, response) => {
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


## updateContact

> Contact updateContact(employeeId, contactId, authorization, contact)



Update contact.

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.ContactApi();
let employeeId = "employeeId_example"; // String | 
let contactId = "contactId_example"; // String | 
let authorization = "authorization_example"; // String | 
let contact = new Pim.Contact(); // Contact | Body of contact as an object that needs to be updated to entity Contact.
apiInstance.updateContact(employeeId, contactId, authorization, contact, (error, data, response) => {
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
 **contactId** | **String**|  | 
 **authorization** | **String**|  | 
 **contact** | [**Contact**](Contact.md)| Body of contact as an object that needs to be updated to entity Contact. | 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

