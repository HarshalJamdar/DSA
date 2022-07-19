



class DNode{
    constructor(data,prev=null,next=null){
        this.data=data;
        this.prev=prev;
        this.next=next
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0
    }

    insertAtBeginning(data){
        const dNode=new DNode(data);
        if(!this.head){
            this.head=dNode;
            this.tail=dNode;
        }else{
            dNode.next=this.head;
            this.head.prev=dNode;
            this.head=dNode;
        }
        this.size +=1
    }

    insertAtEnd(data){
        const dNode=new DNode(data);
        if(!this.tail){
            this.head=dNode;
            this.tail=dNode;
        }
        this.tail.next=dNode;
        dNode.prev=this.tail;
        this.tail=dNode;
        this.size +=1
    }

    insertAtKPosition(data,k){
        if(this.size<k){
            throw Error("invalid position")
        }
        if(this.size===k){
            this.insertAtEnd(data)
        }else{
            const dNode=new DNode(data)
            let count=1
            let curr=this.head
            while(count!==k){
                curr=curr.next;
                count++
            }
            let nextNode=curr.next;
            curr.next=dNode
            dNode.prev=curr
            dNode.next=nextNode
            nextNode.prev=dNode
            this.size +=1
        }
    }

    printDList(){
        let curr = this.head;
        while(curr){
            console.log(curr.data);
            curr=curr.next;
        }
    }

    deletionFromBeginning(){
        if(!this.head){
            throw Error("List is empty can't delete")
        }
        if(this.size===1){
            this.head=null;
            this.tail=null;
        }else{
            let temp=this.head;
            this.head=this.head.next
            this.head.prev=null
            temp.next=null
        }
        this.size -=1
    }

    deletionFromEnd(){
        if(!this.head){
            throw Error("List is empty can't delete")
        }
        if(this.size===1){
            this.deletionFromBeginning()
        }else{
            let secondLast=this.tail.prev
            secondLast.next=null
            this.tail.prev=null
            this.tail=secondLast
        }
        this.size -=1
    }

    deletionFromKth(k){
        if(this.size<k){
            throw Error("invalid position")
        }else if(this.size===k){
            this.deletionFromEnd()
        }else{
            let count=1
            let curr = this.head
            while(count!==k){
             curr=curr.next
             count++
            }
            curr.prev.next=curr.next
            curr.next.prev=curr.prev
            curr.next=null
            curr.prev=null
        }
    }
}

const dlist = new DoublyLinkedList();

dlist.insertAtBeginning(5);
dlist.insertAtBeginning(4);
dlist.insertAtBeginning(6);
dlist.insertAtEnd(10)
dlist.insertAtEnd(11);
dlist.insertAtEnd(12)

dlist.insertAtKPosition(7,3)
dlist.printDList()

console.log("===========")

dlist.deletionFromBeginning();
dlist.deletionFromEnd();
dlist.deletionFromKth(3)
dlist.printDList()

/**inserstion Double List T.C.
 * insertion in front =O(1)
 * insertion in last = O(1)
 * insertion in between =O(n) //we need to traverse the list
 * 
 * delTION t.c
 * DELATION in front = O(1)
 * delation in last =O(1)
 * deletion in between = O(n) // we need to traverse the list
 */