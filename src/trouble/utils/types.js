const Types = {

  isNumber(value) {

    return typeof value === 'number'
  },
  isString(value) {
    return typeof value === 'string'
  },
  isArray(value) {

    return value instanceof Array;
  },
  isObject(value) {

    return typeof value === 'object';
  },
  isFunction(value) {

    return typeof value === 'function'
  }
  ,
  isBoolean(value){

    return typeof value ==='boolean';
  }
}

export default Types;