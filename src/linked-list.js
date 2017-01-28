const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        // For empty list
        if (this._tail == null) {
            const node = new Node(data);
            this._head = node;
            this._tail = node;
        } else {
            const node = new Node(data);
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }
        this.length += 1;
    }

    head() {
        const node = this._head;
        return node.data;
    }

    tail() {
        const node = this._tail;
        return node.data;
    }

    at(index) {
        var node = this._head;           
        for (var i = 0; i < index; i ++) {
            node = node.next;
            }
        return node.data;
    }

    insertAt(index, data) {

    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
