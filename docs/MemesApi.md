# XMemeApi.MemesApi

All URIs are relative to *http://143.110.183.79:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**memeControllerCreateMeme**](MemesApi.md#memeControllerCreateMeme) | **POST** /memes/ | 
[**memeControllerGetAllMemes**](MemesApi.md#memeControllerGetAllMemes) | **GET** /memes/ | 
[**memeControllerGetMeme**](MemesApi.md#memeControllerGetMeme) | **GET** /memes/{mid} | 


<a name="memeControllerCreateMeme"></a>
# **memeControllerCreateMeme**
> ModelsIResponse memeControllerCreateMeme(name, url, caption)



Create New XMeme

### Example
```javascript
var XMemeApi = require('x_meme_api');

var apiInstance = new XMemeApi.MemesApi();

var name = "name_example"; // String | name of the owner

var url = "url_example"; // String | url of the meme

var caption = "caption_example"; // String | caption of the meme


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.memeControllerCreateMeme(name, url, caption, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the owner | 
 **url** | **String**| url of the meme | 
 **caption** | **String**| caption of the meme | 

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

