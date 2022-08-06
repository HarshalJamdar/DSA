
class ListNode{
    constructor(data, next=null){
        this.data=data;
        this.next=next;
    }
}


var mergeTwoLists = function(list1, list2) {
	// Create a temporary node whose next will point to the head of the resultant linked list
    const node = new ListNode();
	let cur = node;
    
	// while both list1 and list2 not null
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            cur.next = list1;
            list1 = list1.next;
        } else {
            cur.next = list2;
            list2 = list2.next;
        }
		// based on above condition will take a node from either list1 or list2 in one iteration and move next
        cur = cur.next;
    }

	// if there are any left over nodes to be covered in either list1 or list2 simply point the cur.next to remaining list
    if (list1) cur.next = list1; 
    if (list2) cur.next = list2;
    
	// remember that node.next contains the head of merged linked list
    return node.next;
};

console.log(mergeTwoLists([1,2,4],[1,3,4]))