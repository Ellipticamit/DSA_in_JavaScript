class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor (value) {
    this.head = { value, next: null }
    this.tail = this.head
  }

  insert (value) {
    var node = { value, next: null }
    if (this.head.value === undefined) {
      this.head = node
      this.tail = this.head
    } else {
      this.tail.next = node
      this.tail = node
    }
  }
}

const myList = new LinkedList()

myList.insert(4)
myList.insert(6)
myList.insert(10)
myList.insert(20)

console.log(myList)

// { _ storage: {}}
