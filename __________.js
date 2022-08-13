
//STACK---FILO >>> add from front >>> remove from front
class Node{
    constructor(data){
      this.data = data;
      this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.firstNode = null;
        this.lastNode = null;
        this.size = 0;
    }

    pushBack(data){
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        if(this.size === 0){
            this.tail = node;
        }
        this.size++;
    }

    popBack(){
        if(this.size === 0) throw Error("Empty List!")
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.size--;
        return temp.data //returning removed element
    }
}

class Stack{
    constructor(){
        this.list = new LinkedList()
    }

    push(val){
        this.list.pushBack(val);
    }

    pop(){
       return this.list.popBack();
    }

    getSize(){
        return this.list.size;
    }

    getTop(){
        return this.list.head;
    }

    isEmpty(){
        return this.list.size === 0;
    }
}


//QUEUE---FIFO >>> add from last >>> remove from front