
 

var middleNode = function(head) {
    // Variables
    fast = head;
    slow = head;
    
    // While we have not reached the end of the linked list, have one pointer 'fast' move twice as fast as the slow pointer 'slow'. Once fast has reached the end of the list, 'slow' must therefore be in the middle of the list.
    while (fast?.next)
    {
        fast = fast.next.next;
        slow = slow.next;
    };
    return slow;
};

console.log(middleNode([1,2,3]))