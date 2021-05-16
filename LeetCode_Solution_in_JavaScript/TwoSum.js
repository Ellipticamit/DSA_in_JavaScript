// Solution 1
// Time Complexity: O(n*n)
// Space Complexity: O(1)
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}

// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(n)
var twoSum = function (nums, target) {
  var hash = {}

  for (var i = 0; i < nums.length; i++) {
    hash[nums[i]] = i
  }
  for (var i = 0; i < nums.length; i++) {
    var sum = target - nums[i]
    if (hash[sum] !== undefined && hash[sum] != i) {
      return [i, hash[sum]]
    }
  }
  return []
}
