/*  BubbleSort
Time Complexity: O(nlogn), Worst Case O(n"n)
Space Complexity: O(n)
*/

function swap (array, left, right) {
  var temp = array[left]
  array[left] = array[right]
  array[right] = temp
}

function QuickSort (array) {
  return QuickSortHelper(array, 0, array.length - 1)
}

function QuickSortHelper (array, left, right) {
  var index
  if (array.length > 1) {
    index = partition(array, left, right)
    if (left < index - 1) QuickSortHelper(array, left, index - 1)
    if (right > index) QuickSortHelper(array, index, right)
  }

  return array
}

function partition (array, left, right) {
  var pivot = array[left]

  while (left <= right) {
    while (array[left] < pivot) left++
    while (array[right] > pivot) right--

    if (left <= right) {
      swap(array, left, right)
      left++
      right--
    }
  }

  return left
}

var array = [6, 1, 23, 4, 2, 3]

console.log(' -------------------------  ')
console.log(QuickSort(array))
