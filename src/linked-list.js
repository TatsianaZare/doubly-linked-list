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

        return this;
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
        if (node == null && index == 0) {
            this.append(data);

            return this;
        }  

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

        return this;
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
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
        if (nodeNext !== null) nodeNext.prev = nodePrev;
        if (nodePrev !== null) nodePrev.next = nodeNext;
        this.length -= 1;

        return this;
    }

    reverse() {
        if (this.length == 1)
            return this;

        var node = this._head;
        var nodeNext = node.next;
        this._tail = node;
        for (var i = 0; i < this.length - 1; i++) {
            node.prev = nodeNext;
            nodeNext = nodeNext.next;
            node.prev.next = node;
            node = node.prev;
        }
        this._head = node;

        return this;
    }

    indexOf(data) {
        var result = -1;
        var node = this._head;           
        for (var i = 0; i < this.length; i ++) {
            if (node.data == data) {
                result = i;
                break;
            }
            node = node.next;
            }

            return result;
    }
}

module.exports = LinkedList;
