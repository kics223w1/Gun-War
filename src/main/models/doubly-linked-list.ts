interface Node {
  next: any;
  prev: any;
  data: any;
}

class DoublyLinkedList {
  private head: Node;
  private tail: Node;
  private length: number;
  constructor() {
    this.head = { data: undefined, next: undefined, prev: undefined };
    this.tail = { data: undefined, next: undefined, prev: undefined };
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
      data: data,
      next: data,
      prev: undefined,
    };
  }

  public secondTimeInsert(data: any): void {
    this.length += 1;
    this.tail = {
      data: data,
      next: undefined,
      prev: this.head,
    };
    this.head.next = this.tail;
  }

  public insert(data: any): void {
    if (!this.head.next) {
      this.firstTimeInsert(data);
      return;
    }
    if (!this.tail.prev) {
      this.secondTimeInsert(data);
      return;
    }
    console.log('vao tiep: ', this.head, ' ', this.tail);
    this.length += 1;
    const obj = {
      next: undefined,
      prev: this.tail,
      data: data,
    };
    this.tail.next = obj;
    this.tail = obj;
  }

  public replace(data: any, node: any): void {
    const prev = node.prev;
    const next = node.next;
    data.prev = prev;
    data.next = next;
    prev.next = data;
    next.prev = data;
    node = null;
  }

  public remove(node: any): void {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    node = null;
  }

  public getAllList(): any[] {
    let cur = this.head;
    const result = [];
    while (cur.next) {
      result.push(cur);
      cur = cur.next;
    }
    result.push(cur);
    return result;
  }
}

export default DoublyLinkedList;
