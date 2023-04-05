# Pim.HealthApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkHealth**](HealthApi.md#checkHealth) | **GET** /pim-svc/health | Endpoint to check health



## checkHealth

> Object checkHealth()

Endpoint to check health

Endpoint to check health

### Example

```javascript
import Pim from 'pim';

let apiInstance = new Pim.HealthApi();
apiInstance.checkHealth((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

