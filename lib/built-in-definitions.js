"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.definitions = void 0;

function _isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function _mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (_isObject(target) && _isObject(source)) {
    for (const key in source) {
      if (_isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        _mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return _mergeDeep(target, ...sources);
}

var _extraBuiltInDefinitions = require("./extra-build-in-definitions");

var _builtInDefinitions = require("@babel/preset-env/lib/built-in-definitions");

const definitions = _mergeDeep({}, _extraBuiltInDefinitions.definitions, _builtInDefinitions.definitions)

exports.definitions = definitions;