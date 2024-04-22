class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * 尾部添加
   */
  append(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  /**
   * 指定位置添加
   */
  insert(position, data) {
    if (position < 0) {
      return false;
    }
    const node = new Node(data);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
      return true;
    }
    let current = this.head;
    let index = 0;
    while (current && index < position - 1) {
      current = current.next;
      index++;
    }
    if (!current) return false;
    node.next = current.next;
    current.next = node;
    return true;
  }

  /**
   * 指定位置删除
   */
  removeAt(position) {
    if (position < 0 || !this.head) return null;
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
      return current.data;
    }
    let index = 0;
    let previous = null;
    // 根据传入的position去遍历 看链表长度是否有这么长 并且获取链表最后一位
    while (current && index < position) {
      previous = current;
      current = current.next;
      index++;
    }
    if (!current) return null;
    previous.next = current.next;
    return current.data;
  }

  /**
   * 查找元素位置
   */
  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  /**
   * 展示所有元素
   */
  toString() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " ";
      current = current.next;
    }
    return result.trim();
  }

  length() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  getLast() {
    let current = this.head;
    while (current && current.next) {
      current = current.next;
    }
    return current ? current.data : null;
  }

  clear() {
    this.head = null;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  isEmpty() {
    return this.head === null;
  }

  getElementAt(position) {
    if (position < 0) return null;
    let current = this.head;
    let index = 0;
    while (current && index < position) {
      current = current.next;
      index++;
    }
    return current ? current.data : null;
  }

  update(position, newData) {
    if (position < 0) return false;
    let current = this.head;
    let index = 0;
    while (current && index < position) {
      current = current.next;
      index++;
    }
    if (!current) return false;
    current.data = newData;
    return true;
  }

  contains(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

const linkedList = new LinkedList();
linkedList.append(66);
// linkedList.append(88);
// linkedList.append(99);
// linkedList.removeAt(2);

// linkedList.insert(1, 666);
console.log(linkedList);
