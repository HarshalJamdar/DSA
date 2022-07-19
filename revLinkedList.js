function rev(arr){
    let res=[]
    class Node{
        constructor(data, next=null){
            this.data=data;
            this.next=next;
        }
    }
    
    class LinkedList{
        constructor(){
            this.firstNode=null;
            this.lastNode=null;
        }
        insertInLastOfList(data){
            const node = new Node(data);
            if(!this.firstNode){
                this.firstNode=node;
                this.lastNode = node;
            }else{
                this.lastNode.next = node;
                this.lastNode = node;
            }
        }
    
        
        reverseList(){

            let curr = null;
            while(this.firstNode){
                if(!curr){
                    this.lastNode = this.firstNode;
                }
                let nextNode=this.firstNode.next;
                this.firstNode.next =curr;
                curr =this.firstNode;
                this.firstNode = nextNode
            }
            this.firstNode=curr;
        }

        prinList(){
            let curr= this.firstNode;
            while(curr){
                //console.log(curr)
               res.push(curr.data);
                curr= curr.next;
            }
            res.join(' ')
        }
    }

    const list = new LinkedList();
    for(i=0;i<arr.length;i++){
        list.insertInLastOfList(arr[i])
    }
    list.reverseList()
    list.prinList()
    return res
}


console.log(rev([1,2,3]))