// Javascript program to implement Queue using
// two stacks with costly enQueue()
// class Queue{
	
//     constructor(){
//         this.s1 = [];
//         this.s2 = [];
//     }
    
//     enQueue(x){
//         while (this.s1.length != 0)
//         {
//             this.s2.push(this.s1.pop());
//         }
    
//         this.s1.push(x);
    
//         while (this.s2.length != 0)
//         {
//             this.s1.push(this.s2.pop());
//         }
//     }
    
   
//     deQueue()
//     {
//         if (this.s1.length == 0) console.log("Q is Empty");
//         return this.s1.pop();
//     }
//     }
    
//     let q = new Queue();
//     q.enQueue(1);
//     q.enQueue(2);
//     q.enQueue(3);
//     q.enQueue(13);
//     q.enQueue(31);
    
//     console.log(q.deQueue() );
//     console.log(q.deQueue() );
//     console.log(q.deQueue() );
//     console.log(q.deQueue() );
//     console.log(q.deQueue() );
   
    

class QueueUsingStack{
    constructor(){
        this.s1 = [];
        this.s2 = [];
    }

    push(data){ //O(1)
        this.s1.push(data);
    }

    pop(){ //O(n)
        if(!this.s2.length){
            while(this.s1.length){
                this.s2.push(this.s2.pop())
            }
        }
        return  this.s2.pop();
    }

    isEmpty(){
        return !this.s1.length && !this.s2.length;
    }
}