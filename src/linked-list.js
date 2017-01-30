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
        return node !== null ? node.data : null;
    }

    tail() {
        const node = this._tail;
        return node !== null ? node.data : null;
    }

    at(index) {
        var node = this._head;           
        for (var i = 0; i < index; i ++) {
            node = node.next;
            }
        return node.data;
    }

    insertAt(index, data) {
        var node = this._head;           
        for (var i = 0; i < index; i ++) {
            node = node.next;
            }
        var nodePrev = node.prev;
        var nodeNew = new Node(data);
        nodePrev.next = nodeNew;
        nodeNew.prev = nodePrev;
        nodeNew.next = node;
        node.prev = nodeNew;
        this.lenght += 1;
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {
        var node = this._head;           
        for (var i = 0; i < index; i ++) {
            node = node.next;
            }
        var nodePrev = node.prev;
        var nodeNext = node.next;
        node.prev = null;
        node.next = null;
        nodeNext.prev = nodePrev;
        nodePrev.next = nodeNext;
        this.length -= 1;
    }

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
