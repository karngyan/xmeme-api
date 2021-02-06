# XMemeApi.MemesApi

All URIs are relative to *https://api.xmeme.karngyan.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**memeControllerCreateMeme**](MemesApi.md#memeControllerCreateMeme) | **POST** /memes/ | 
[**memeControllerGetAllMemes**](MemesApi.md#memeControllerGetAllMemes) | **GET** /memes/ | 
[**memeControllerGetMeme**](MemesApi.md#memeControllerGetMeme) | **GET** /memes/{mid} | 


<a name="memeControllerCreateMeme"></a>
# **memeControllerCreateMeme**
> ModelsIResponse memeControllerCreateMeme(body)



Create New XMeme

### Example
```javascript
var XMemeApi = require('x_meme_api');

var apiInstance = new XMemeApi.MemesApi();

var body = new XMemeApi.ModelsMeme(); // ModelsMeme | Meme Request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memeControllerCreateMeme(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsMeme**](ModelsMeme.md)| Meme Request | 

### Return type

[**ModelsIResponse**](ModelsIResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="memeControllerGetAllMemes"></a>
# **memeControllerGetAllMemes**
> [ModelsMeme] memeControllerGetAllMemes()



Get Latest 100 Memes (later can be paginated)

### Example
```javascript
var XMemeApi = require('x_meme_api');

var apiInstance = new XMemeApi.MemesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memeControllerGetAllMemes(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ModelsMeme]**](ModelsMeme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="memeControllerGetMeme"></a>
# **memeControllerGetMeme**
> ModelsMeme memeControllerGetMeme(mid)



Get Meme by Id

### Example
```javascript
var XMemeApi = require('x_meme_api');

var apiInstance = new XMemeApi.MemesApi();

var mid = 789; // Number | the mid you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memeControllerGetMeme(mid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **Number**| the mid you want to get | 

### Return type

[**ModelsMeme**](ModelsMeme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

