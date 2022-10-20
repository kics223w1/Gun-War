interface Node {
  next?: Node;
  prev?: Node;
  data?: any;
}

class DoublyLinkedList {
  private head: Node | undefined;
  private tail: Node | undefined;
  private length: number;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  public getHead(): any {
    return this.head;
  }

  public getTail(): any {
    return this.tail;
  }

  public getLength(): number {
    return this.length;
  }

  public firstTimeInsert(data: any): void {
    this.length += 1;
    this.head = {
      data,
      next: undefined,
      prev: undefined,
    };
  }

  public secondTimeInsert(data: any): void {
    this.length += 1;
    this.tail = {
      data,
      next: undefined,
      prev: this.head,
    };
    if (this.head) {
      this.head.next = this.tail;
    }
  }

  public insert(data: any): void {
    if (!this.head) {
      this.firstTimeInsert(data);
      return;
    }
    if (!this.tail) {
      this.secondTimeInsert(data);
      return;
    }
    this.length += 1;
    const oldTail = this.tail;
    this.tail = {
      next: undefined,
      prev: oldTail,
      data,
    };
    oldTail.next = this.tail;
  }

  public replaceNode(oldData: any, newData: any): void {
    const node = this.findNode(oldData);
    if (node) {
      node.data = newData;
    }
  }

  public removeNode(data: any): void {
    const node = this.findNode(data);
    if (node) {
      this.remove(node);
    }
  }

  private remove(node: Node): void {
    if (this.length === 2) {
      this.head = node;
      this.tail = undefined;
      this.length = 1;
      return;
    }
    if (this.length === 1) {
      this.head = undefined;
      this.length = 0;
      return;
    }
    if (node.data === this.head?.data) {
      if (this.head) {
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = undefined;
        }
      }
      return;
    }
    if (node.data === this.tail?.data) {
      if (this.tail) {
        this.tail = this.tail.prev;
        if (this.tail) {
          this.tail.next = undefined;
        }
      }
      return;
    }
    const { prev, next } = node;
    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }
    this.length -= 1;
    delete node.data;
    delete node.next;
    delete node.prev;
  }

  public getAllList(): any[] {
    let cur = this.head;
    if (!cur) {
      return [];
    }
    const result = [];
    while (cur.next) {
      result.push(cur);
      cur = cur.next;
    }
    result.push(cur);
    return result;
  }

  private findNode(data: any): Node | undefined {
    let cur = this.head;
    if (!cur) {
      return undefined;
    }
    while (cur.next) {
      if (cur.data === data) {
        return cur;
      }
      cur = cur.next;
    }
    if (cur.data === data) {
      return cur;
    }
    return undefined;
  }
}

export default DoublyLinkedList;
