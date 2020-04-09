// 1. 暴力法，会超时

var lengthOfLongestSubstring = function(s) {
  let n = s.length
  let max = 0
  let sub = ''
  let len = 0
  for(let i = 0;i < n;i++){
    for(let j = i + 1;j <= n;j++){
      sub = s.substring(i, j)
      len = sub.length
      if(len > max && isUnique(sub)){
        max = len
      }
    }
  }
  return max
  // 判断重复
  function isUnique(str){
    let map = new Map()
    let n = str.length
    for(let i = 0;i < n;i++){
      if(map.has(str[i])){
        return false
      }
      map.set(str[i],i)
    }
    return true
  }
};