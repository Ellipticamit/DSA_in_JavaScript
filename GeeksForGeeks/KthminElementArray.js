/*
Solution 1
Time Complexity: "worst-case" O(n*n) 
                "Average-case" On(n*k)
Space Complexity: "worst-case" O(n)
                "Average-case" O(k)
*/
class Solution {
  kthSmallest (arr, l, r, k) {
    if (k > r + 1) return -1
    var small = Number.MAX_VALUE
    var count = 0
    var visited = {}
    while (1) {
      var temp_small = Number.MAX_VALUE
      for (var i in arr) {
        if (visited[arr[i]]) continue
        if (temp_small > arr[i] && !visited[arr[i]]) temp_small = arr[i]
      }
      visited[temp_small] = true
      count++
      if (count === k) return temp_small
    }

    return -1
  }
}

/*
Solution 2
Time Complexity: O(nlogn) 
Space Complexity: O(1)
*/
class Solution {
  kthSmallest (arr, l, r, k) {
    arr.sort((a, b) => a - b)
    return arr[k - 1]
  }
}

//console.log('visited', visited)
