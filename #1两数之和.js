/**
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/

// 1.自己写的暴力解法。 140ms 最垃圾的解法

var twoSum = function(nums, target) {
  let len = nums.length
  for(let i = 0;i < len;i++){
      for(let j = i + 1;j < len;j++){
          if(nums[i] + nums[j] === target){
              return [i, j]
          }
      }
  }
}

// 2. 稍微优化一下 在J中找 target - nums[i]，可以少做加减法 104ms

var twoSum = function(nums, target) {
  let len = nums.length
  for(let i = 0;i < len;i++){
      let dif = target - nums[i]
      for(let j = i + 1;j < len;j++){
          if(nums[j] === dif){
              return [i, j]
          }
      }
  }
}

// 3 标准答案，利用hashmap来做，或者对象{}，数组不会有重复元素？，如果数组有重复元素就不行了

var twoSum = function(nums, target){
  let map = {}
  let len = nums.length
  for(let i = 0;i < len;i++){
    let dif = target - nums[i]
    if(map[dif]){
      return [map[dif], i]
    }
    map[num[i]] = i
  }
}

var twoSum = function(nums, target){    //  96ms
  let map = new Map()
  let len = nums.length
  for(let i = 0;i < len;i++){
    let dif = target - nums[i]
    if(map.has(dif)) return [map.get(dif), i]
    map.set(nums[i], i)
  }
}




