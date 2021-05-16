/*  BubbleSort
Time Complexity: O(n*n)
Space Complexity: O(1)
*/

function swap (array, index1, index2) {
  var temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

function bubbleSort (array) {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 0; j <= array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }
  return array
}

var array = [6, 1, 4, 3, 2, 5]

console.log(' -------------------------  ')
console.log(bubbleSort(array))
