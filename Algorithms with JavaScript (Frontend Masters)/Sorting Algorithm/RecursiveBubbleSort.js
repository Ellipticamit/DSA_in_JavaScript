/*  BubbleSort
Time Complexity: O(n*n)
Space Complexity: O(1)
*/

function recursiveBubbleSort (array, n) {
  if (n === 1) return array

  for (var i = 0; i < n; i++) {
    if (array[i] > array[i + 1]) {
      var temp = array[i]
      array[i] = array[i + 1]
      array[i + 1] = temp
    }
  }

  recursiveBubbleSort(array, n - 1)
}

var array = [6, 1, 4, 3, 2, 5]
console.log(' -------------------------  ')
recursiveBubbleSort(array, array.length)
console.log(array)
