class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (!this.first) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
    this.length++;
  }

  dequeue() {
    if (!this.first) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }

    this.length--;
    return node.value;
  }
}

module.exports = Queue;
