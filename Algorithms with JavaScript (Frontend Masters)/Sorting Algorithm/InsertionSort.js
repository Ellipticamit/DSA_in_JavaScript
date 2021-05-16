/*  BubbleSort
Time Complexity: O(nlogn)
Space Complexity: O(1)
*/

function swap (array, index1, index2) {
  var temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

function insertionSort (array) {
  var temp, i, j
  for (i = 1; i < array.length; i++) {
    temp = array[i]
    j = i - 1
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j]
      j--
    }

    array[j + 1] = temp
  }

  return array
}

var array = [6, 1, 4, 3, 2, 5]

console.log(' -------------------------  ')
console.log(insertionSort(array))
