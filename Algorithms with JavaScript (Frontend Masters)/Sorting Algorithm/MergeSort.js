/*  BubbleSort
Time Complexity: O(nlogn)
Space Complexity: O(n)
*/

function merge (leftArray, rightArray) {
  var results = [],
    leftIndex = 0,
    rightIndex = 0

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      results.push(leftArray[leftIndex++])
    } else {
      results.push(rightArray[rightIndex++])
    }
  }

  var leftRemains = leftArray.splice(leftIndex),
    rightRemains = rightArray.splice(rightIndex)

  return results.concat(leftRemains).concat(rightRemains)
}

function mergeSort (array) {
  if (array.length < 2) return array
  var midpoint = Math.floor(array.length / 2),
    leftArray = array.slice(0, midpoint),
    rightArray = array.slice(midpoint)

  leftArray = mergeSort(leftArray)
  rightArray = mergeSort(rightArray)
  return merge(leftArray, rightArray)
}

var array = [6, 1, 4, 3, 2, 5]
console.log(' -------------------------  ')
console.log(mergeSort(array))
