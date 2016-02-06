'use strict';

function identity(obj) { return obj }

// Creates a Redux reducer from an obj. The method names in the
// obj map to the type of action that they handle.
module.exports = function (defaultValue, methods) {
  var defaultState = arguments.length === 2 ? defaultValue : null;
  var obj = arguments.length === 2 ? methods : defaultValue;

  return function (state, action) {
    state === undefined && (state = defaultState);
    return (obj[action.type] || identity)(state, action)
  }
}
