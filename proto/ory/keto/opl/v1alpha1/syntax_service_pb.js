// source: ory/keto/opl/v1alpha1/syntax_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var protoc$gen$openapiv2_options_annotations_pb = require('../../../../protoc-gen-openapiv2/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$openapiv2_options_annotations_pb);
goog.exportSymbol('proto.ory.keto.opl.v1alpha1.CheckRequest', null, global);
goog.exportSymbol('proto.ory.keto.opl.v1alpha1.CheckResponse', null, global);
goog.exportSymbol('proto.ory.keto.opl.v1alpha1.ParseError', null, global);
goog.exportSymbol('proto.ory.keto.opl.v1alpha1.SourcePosition', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ory.keto.opl.v1alpha1.CheckRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ory.keto.opl.v1alpha1.CheckRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ory.keto.opl.v1alpha1.CheckRequest.displayName = 'proto.ory.keto.opl.v1alpha1.CheckRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ory.keto.opl.v1alpha1.CheckResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ory.keto.opl.v1alpha1.CheckResponse.repeatedFields_, null);
};
goog.inherits(proto.ory.keto.opl.v1alpha1.CheckResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ory.keto.opl.v1alpha1.CheckResponse.displayName = 'proto.ory.keto.opl.v1alpha1.CheckResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ory.keto.opl.v1alpha1.ParseError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ory.keto.opl.v1alpha1.ParseError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ory.keto.opl.v1alpha1.ParseError.displayName = 'proto.ory.keto.opl.v1alpha1.ParseError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ory.keto.opl.v1alpha1.SourcePosition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ory.keto.opl.v1alpha1.SourcePosition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ory.keto.opl.v1alpha1.SourcePosition.displayName = 'proto.ory.keto.opl.v1alpha1.SourcePosition';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ory.keto.opl.v1alpha1.CheckRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ory.keto.opl.v1alpha1.CheckRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ory.keto.opl.v1alpha1.CheckRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ory.keto.opl.v1alpha1.CheckRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ory.keto.opl.v1alpha1.CheckRequest}
 */
proto.ory.keto.opl.v1alpha1.CheckRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ory.keto.opl.v1alpha1.CheckRequest;
  return proto.ory.keto.opl.v1alpha1.CheckRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ory.keto.opl.v1alpha1.CheckRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ory.keto.opl.v1alpha1.CheckRequest}
 */
proto.ory.keto.opl.v1alpha1.CheckRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ory.keto.opl.v1alpha1.CheckRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ory.keto.opl.v1alpha1.CheckRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ory.keto.opl.v1alpha1.CheckRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ory.keto.opl.v1alpha1.CheckRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string content = 1;
 * @return {string}
 */
proto.ory.keto.opl.v1alpha1.CheckRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ory.keto.opl.v1alpha1.CheckRequest} returns this
 */
proto.ory.keto.opl.v1alpha1.CheckRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ory.keto.opl.v1alpha1.CheckResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ory.keto.opl.v1alpha1.CheckResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ory.keto.opl.v1alpha1.CheckResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ory.keto.opl.v1alpha1.CheckResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ory.keto.opl.v1alpha1.CheckResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    proto.ory.keto.opl.v1alpha1.ParseError.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ory.keto.opl.v1alpha1.CheckResponse}
 */
proto.ory.keto.opl.v1alpha1.CheckResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ory.keto.opl.v1alpha1.CheckResponse;
  return proto.ory.keto.opl.v1alpha1.CheckResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ory.keto.opl.v1alpha1.CheckResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ory.keto.opl.v1alpha1.CheckResponse}
 */
proto.ory.keto.opl.v1alpha1.CheckResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ory.keto.opl.v1alpha1.ParseError;
      reader.readMessage(value,proto.ory.keto.opl.v1alpha1.ParseError.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ory.keto.opl.v1alpha1.CheckResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ory.keto.opl.v1alpha1.CheckResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ory.keto.opl.v1alpha1.CheckResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ory.keto.opl.v1alpha1.CheckResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ory.keto.opl.v1alpha1.ParseError.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ParseError errors = 1;
 * @return {!Array<!proto.ory.keto.opl.v1alpha1.ParseError>}
 */
proto.ory.keto.opl.v1alpha1.CheckResponse.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.ory.keto.opl.v1alpha1.ParseError>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ory.keto.opl.v1alpha1.ParseError, 1));
};


/**
 * @param {!Array<!proto.ory.keto.opl.v1alpha1.ParseError>} value
 * @return {!proto.ory.keto.opl.v1alpha1.CheckResponse} returns this
*/
proto.ory.keto.opl.v1alpha1.CheckResponse.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ory.keto.opl.v1alpha1.ParseError=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ory.keto.opl.v1alpha1.ParseError}
 */
proto.ory.keto.opl.v1alpha1.CheckResponse.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ory.keto.opl.v1alpha1.ParseError, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ory.keto.opl.v1alpha1.CheckResponse} returns this
 */
proto.ory.keto.opl.v1alpha1.CheckResponse.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ory.keto.opl.v1alpha1.ParseError.prototype.toObject = function(opt_includeInstance) {
  return proto.ory.keto.opl.v1alpha1.ParseError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ory.keto.opl.v1alpha1.ParseError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ory.keto.opl.v1alpha1.ParseError.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    start: (f = msg.getStart()) && proto.ory.keto.opl.v1alpha1.SourcePosition.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && proto.ory.keto.opl.v1alpha1.SourcePosition.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ory.keto.opl.v1alpha1.ParseError}
 */
proto.ory.keto.opl.v1alpha1.ParseError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ory.keto.opl.v1alpha1.ParseError;
  return proto.ory.keto.opl.v1alpha1.ParseError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ory.keto.opl.v1alpha1.ParseError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ory.keto.opl.v1alpha1.ParseError}
 */
proto.ory.keto.opl.v1alpha1.ParseError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = new proto.ory.keto.opl.v1alpha1.SourcePosition;
      reader.readMessage(value,proto.ory.keto.opl.v1alpha1.SourcePosition.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 3:
      var value = new proto.ory.keto.opl.v1alpha1.SourcePosition;
      reader.readMessage(value,proto.ory.keto.opl.v1alpha1.SourcePosition.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ory.keto.opl.v1alpha1.ParseError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ory.keto.opl.v1alpha1.ParseError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ory.keto.opl.v1alpha1.ParseError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ory.keto.opl.v1alpha1.ParseError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ory.keto.opl.v1alpha1.SourcePosition.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ory.keto.opl.v1alpha1.SourcePosition.serializeBinaryToWriter
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.ory.keto.opl.v1alpha1.ParseError.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ory.keto.opl.v1alpha1.ParseError} returns this
 */
proto.ory.keto.opl.v1alpha1.ParseError.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SourcePosition start = 2;
 * @return {?proto.ory.keto.opl.v1alpha1.SourcePosition}
 */
proto.ory.keto.opl.v1alpha1.ParseError.prototype.getStart = function() {
  return /** @type{?proto.ory.keto.opl.v1alpha1.SourcePosition} */ (
    jspb.Message.getWrapperField(this, proto.ory.keto.opl.v1alpha1.SourcePosition, 2));
};


/**
 * @param {?proto.ory.keto.opl.v1alpha1.SourcePosition|undefined} value
 * @return {!proto.ory.keto.opl.v1alpha1.ParseError} returns this
*/
proto.ory.keto.opl.v1alpha1.ParseError.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ory.keto.opl.v1alpha1.ParseError} returns this
 */
proto.ory.keto.opl.v1alpha1.ParseError.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ory.keto.opl.v1alpha1.ParseError.prototype.hasStart = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SourcePosition end = 3;
 * @return {?proto.ory.keto.opl.v1alpha1.SourcePosition}
 */
proto.ory.keto.opl.v1alpha1.ParseError.prototype.getEnd = function() {
  return /** @type{?proto.ory.keto.opl.v1alpha1.SourcePosition} */ (
    jspb.Message.getWrapperField(this, proto.ory.keto.opl.v1alpha1.SourcePosition, 3));
};


/**
 * @param {?proto.ory.keto.opl.v1alpha1.SourcePosition|undefined} value
 * @return {!proto.ory.keto.opl.v1alpha1.ParseError} returns this
*/
proto.ory.keto.opl.v1alpha1.ParseError.prototype.setEnd = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ory.keto.opl.v1alpha1.ParseError} returns this
 */
proto.ory.keto.opl.v1alpha1.ParseError.prototype.clearEnd = function() {
  return this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ory.keto.opl.v1alpha1.ParseError.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ory.keto.opl.v1alpha1.SourcePosition.prototype.toObject = function(opt_includeInstance) {
  return proto.ory.keto.opl.v1alpha1.SourcePosition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ory.keto.opl.v1alpha1.SourcePosition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ory.keto.opl.v1alpha1.SourcePosition.toObject = function(includeInstance, msg) {
  var f, obj = {
    line: jspb.Message.getFieldWithDefault(msg, 1, 0),
    column: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ory.keto.opl.v1alpha1.SourcePosition}
 */
proto.ory.keto.opl.v1alpha1.SourcePosition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ory.keto.opl.v1alpha1.SourcePosition;
  return proto.ory.keto.opl.v1alpha1.SourcePosition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ory.keto.opl.v1alpha1.SourcePosition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ory.keto.opl.v1alpha1.SourcePosition}
 */
proto.ory.keto.opl.v1alpha1.SourcePosition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLine(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setColumn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ory.keto.opl.v1alpha1.SourcePosition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ory.keto.opl.v1alpha1.SourcePosition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ory.keto.opl.v1alpha1.SourcePosition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ory.keto.opl.v1alpha1.SourcePosition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLine();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getColumn();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 line = 1;
 * @return {number}
 */
proto.ory.keto.opl.v1alpha1.SourcePosition.prototype.getLine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ory.keto.opl.v1alpha1.SourcePosition} returns this
 */
proto.ory.keto.opl.v1alpha1.SourcePosition.prototype.setLine = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 column = 2;
 * @return {number}
 */
proto.ory.keto.opl.v1alpha1.SourcePosition.prototype.getColumn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ory.keto.opl.v1alpha1.SourcePosition} returns this
 */
proto.ory.keto.opl.v1alpha1.SourcePosition.prototype.setColumn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.ory.keto.opl.v1alpha1);
