/*
 * X Meme API
 * Submission for Crio Winter of Doing Stage 2B
 *
 * OpenAPI spec version: 1.0.0
 * Contact: karngyan@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelsIResponse', 'model/ModelsMeme', 'api/MemesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ModelsIResponse'), require('./model/ModelsMeme'), require('./api/MemesApi'));
  }
}(function(ApiClient, ModelsIResponse, ModelsMeme, MemesApi) {
  'use strict';

  /**
   * Submission_for_Crio_Winter_of_Doing_Stage_2B.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var XMemeApi = require('index'); // See note below*.
   * var xxxSvc = new XMemeApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new XMemeApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new XMemeApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new XMemeApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ModelsIResponse model constructor.
     * @property {module:model/ModelsIResponse}
     */
    ModelsIResponse: ModelsIResponse,
    /**
     * The ModelsMeme model constructor.
     * @property {module:model/ModelsMeme}
     */
    ModelsMeme: ModelsMeme,
    /**
     * The MemesApi service constructor.
     * @property {module:api/MemesApi}
     */
    MemesApi: MemesApi
  };

  return exports;
}));
