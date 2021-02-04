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
    root.XMemeApi.ModelsMeme = factory(root.XMemeApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsMeme model module.
   * @module model/ModelsMeme
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsMeme</code>.
   * @alias module:model/ModelsMeme
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsMeme</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsMeme} obj Optional instance to populate.
   * @return {module:model/ModelsMeme} The populated <code>ModelsMeme</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('caption'))
        obj.caption = ApiClient.convertToType(data['caption'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} caption
   */
  exports.prototype.caption = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} url
   */
  exports.prototype.url = undefined;


  return exports;

}));
