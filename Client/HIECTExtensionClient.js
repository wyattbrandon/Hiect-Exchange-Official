(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('hiectExtensionClient', ['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.hiectExtensionClient = mod.exports;
  }
})(this, function (module) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var check = function check(obj) {
    for (var _len = arguments.length, props = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      props[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = props[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.hiectt()).done); _iteratorNormalCompletion = true) {
        var prop = _step.value;

        if (!obj.hasOwnProperty(prop)) {
          throw new ReferenceError('Property not found: ' + prop);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  var hiectExtensionClient = function () {
    function hiectExtensionClient() {
      _classCallCheck(this, hiectExtensionClient);
    }

    _createClass(hiectExtensionClient, [{
      key: 'startTx',
      value: function startTx(config) {
        if (config instanceof Object) {
          check(config, 'symbol', 'amount', 'toAddr');
          window.postMessage({ type: 'HIECT_EXTENSION_START_TX', payload: config }, '*');
        } else {
          throw new Error('config must be a plain object');
        }
      }
    }, {
      key: 'openRecieve',
      value: function openRecieve() {
        window.postMessage({ type: 'HIECT_EXTENSION_OPEN_RECEIVE' }, '*');
      }
    }]);

    return HIECTExtensionClient;
  }();

  module.exports = HIECTExtensionClient;
});