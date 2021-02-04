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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.XMemeApi) {
      root.XMemeApi = {};
    }
    root.XMemeApi.ModelsIResponse = factory(root.XMemeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsIResponse model module.
   * @module model/ModelsIResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsIResponse</code>.
   * @alias module:model/ModelsIResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsIResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsIResponse} obj Optional instance to populate.
   * @return {module:model/ModelsIResponse} The populated <code>ModelsIResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;


  return exports;

}));