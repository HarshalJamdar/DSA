class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }

    unshift(data){
        let node = new Node(data)
      if(!this.head){
        this.head=node;
        this.tail=node;
      }else{
        let temp=this.head;
        this.head=node;
        node.next=temp;
      }
    }

    push(data){
        let node=new Node(data)
        if(!this.head){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            this.tail=node;
        }
    }

    insert(data,k){
        let node=new Node(data,k)
        let curr=this.head, count=1
        while(curr && count!==k){
            curr=curr.next;
            count++
        }

        if(!curr && count!==k){
            console.log("invalid position")
        }else if(!curr && count==k) this.push(data)
        else {
            node.next= curr.next;
            curr.next=node;
        }
    }

    shift(){
        if(!this.head){
            throw Error("We can't delete from empty list.");
        }
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        if(!this.head){
          this.tail = null;
        }
    }

    pop(){
     let curr = this.head;
     while(curr !== this.tail){
        curr = curr.next;
     }
     curr.next = null;
     this.tail = curr;
    }

    remove(k){
        let count = 1
        if(k===1){
            this.shift()
        }
        let curr = this.head
        while(curr && count!==k-1){
              count++
              curr=curr.next
        }
        if(!curr){
            console.log("invalid position")
            throw Error("invalid position")
        }else{
            let target =  curr.next
            curr.next = target.next
            target.next = null
        }
        if(!curr.next){
            this.tail=curr
        }
    }

    print(){
        let curr = this.head, res = []
        while(curr){
           // console.log(curr)
            res.push(curr.data)
            curr = curr.next
        }
        console.log(res)
    }

    find(k){ //find kth element
        let count = 1, curr = this.head
        if(!curr){
            console.log("no linkedlist")
        }
        while(curr && count!==k){
            count++
            curr=curr.next
        }
        console.log(curr.data)
    }

    findMiddle(){
        var slow_ptr = this.head;
        var fast_ptr = this.head;
             if (this.head != null)
             {
                 while (fast_ptr != null && fast_ptr.next != null){
                     fast_ptr = fast_ptr.next.next;
                     slow_ptr = slow_ptr.next;
                 }
               console.log("The middle element is [" + slow_ptr.data + "]");
             }
         }
      

    removeDuplicate(){// from sorted linkedlist
        /*Another reference to head*/
        let curr = this.head;
  
        /* Traverse list till the last node */
        while (curr != null) {
             let temp = curr;
            /*Compare current node with the next node and
            keep on deleting them until it matches the current
            node data */
            while(temp!=null && temp.data==curr.data) {
                temp = temp.next;
            }
            /*Set current node next to the next different
            element denoted by temp*/
            curr.next = temp;
            curr = curr.next;
        }
    }

    removeDuplicate2( head) {// from unsorted linkedlist
        // Hash to store seen values
        var hs =  new Set();
 
        /* Pick elements one by one */
        var current = this.head;
        var prev = null;
        while (current != null) {
            var curval = current.val;
 
            // If current value is seen before
            if (hs.has(curval)) {
                prev.next = current.next;
            } else {
                hs.add(curval);
                prev = current;
            }
            current = current.next;
        }
    }
}

const list = new LinkedList()
 list.push(1)
 list.push(2)
 list.push(3)
 list.push(4)
 list.push(5)
 list.pop()
 list.shift()
 list.unshift(7)
 list.insert(8,3)
 list.remove(2)
 list.print()
 list.find(2)
 list.findMiddle()