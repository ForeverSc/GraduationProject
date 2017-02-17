export default {
  isEmpty(str){
    return !str
  },
  isEqual(str, reStr){
    return str.length === reStr.length && str === reStr
  }
}
