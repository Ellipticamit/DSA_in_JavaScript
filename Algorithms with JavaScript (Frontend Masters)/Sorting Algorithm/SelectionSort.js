function swap (array, index1, index2) {
  var temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

function selectionSort (array) {
  var min
  var len = array.length
  for (var i = 0; i < len; i++) {
    min = i
    for (var j = i + 1; j < len; j++) {
      if (array[j] < array[min]) min = j
    }
    if (i !== min) swap(array, i, min)
  }
  return array
}

var array = [6, 1, 4, 3, 2, 5]

console.log(' -------------------------  ')
console.log(selectionSort(array))
