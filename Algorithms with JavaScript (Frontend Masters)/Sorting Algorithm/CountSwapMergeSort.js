/*  BubbleSort
Time Complexity: O(n*n)
Space Complexity: O(1)
*/

function merge (leftArray, rightArray) {
  var leftIndex = 0,
    rightIndex = 0,
    results = [],
    swaps = 0

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] > rightArray[rightIndex]) {
      count++
      results.push(rightArray[rightIndex++])
    } else results.push(leftArray[leftIndex++])
  }

  var leftRemains = leftArray.slice(leftIndex),
    rightRemains = rightArray.slice(rightIndex)

  return results.concat(leftRemains).concat(rightRemains)
}

function mergeSort (array) {
  var count = 0
  if (array.length < 2) return array

  var mid = Math.floor(array.length / 2),
    leftArray = array.slice(0, mid),
    rightArray = array.slice(mid)

  leftArray = mergeSort(leftArray)
  rightArray = mergeSort(rightArray)
  return merge(leftArray, rightArray)
}

var array = [8, 4, 2, 1]
console.log(' -------------------------  ')
console.log(mergeSort(array))

console.log('count = ', count)

// 1,4,3,2,5,6
// 1,3,2,4,5,6
