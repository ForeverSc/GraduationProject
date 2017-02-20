export default {
  deepClone(target){
    //适用于对象中有Array，function,json
    var result = (!target.sort) ? {} : [];//解决会把Array复制成Object的问题
    for (var key in target) {
      result[key] = typeof target[key] === 'object' ? deepClone(target[key]) : target[key];
    }
    return result;
  }
}
