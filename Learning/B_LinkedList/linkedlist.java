package Learning.B_LinkedList;

public class linkedlist {
    /*
     * 
       Linear data structure where elelments are not stored in contiguous memory
       location
       -> Every element is a separate object (Node)
       
       ## Each node contains : data and some address
     * 
     */

    static class Node {
        int data;
        Node next; // address

        public Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    // LinkedList contains head, tail
    public static Node head;
    public static Node tail;
    public static int size;

    // Operations on linked list
    // 1. add first : 0(1)
    public static void addFirst(int data) {
        // Step 1 : Create a new Node
        Node newNode = new Node(data);
        if (head == null) { // here we can also declare tail == null , but we generally access it through
                            // head
            head = tail = newNode;
            size++;
            return;
        }

        newNode.next = head;
        head = newNode;
        size++;
    }

    // 2. add last : O(1)
    public static void addLast(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = tail = newNode;
            size++;
            return;
        }
        tail.next = newNode;
        tail = newNode;
        size++;
    }

    // 3. print : O(n)
    public static void print() {
        if (head == null) {
            System.out.println("null");
            return;
        }
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + "->");
            temp = temp.next;
        }
        System.out.println("null");
    }

    // 4. Add in middle : O(n)
    public static void addMid(int data, int index){
        Node newNode = new Node(data);
        if(index==0){
           addFirst(data);
            return;
        }
        Node temp = head;
        int i=0;
        while(i<index-1 && temp!=null ){
            temp = temp.next;
            i++;
        }
        newNode.next=temp.next;
        temp.next = newNode;
        size++;
        return;
    }

    // 5. remove first : O(1)
    public static void removeFirst(){
        if(size==0){
            return;
        } else if(size==1){
            head=tail=null;
            size--;
            return;
        }

        head=head.next;
        size--;
    }
    // 6. Remove last : 
    public static void removeLast(){
        if(size==0){
            return;
        } else if(size==1){
            head=tail=null;
            size--;
            return;
        }
        Node temp = head;
        while(temp.next.next!=null){
            temp=temp.next;
        }
        temp.next=null;
        tail=temp;
        size--;
    }
    public static void main(String[] args) {
        linkedlist.print();
        linkedlist.addMid(0, 0);
        linkedlist.print();
        System.out.println(size);
        linkedlist.addLast(5);
        linkedlist.addFirst(3);
        linkedlist.addFirst(1);
        linkedlist.addMid(-2, 3);
        linkedlist.addFirst(-2);
        linkedlist.print();
        System.out.println(size);
        linkedlist.addLast(7);
        linkedlist.print();
        System.out.println(size);
        linkedlist.addMid(8,3);
        linkedlist.print();
        System.out.println(size);
        linkedlist.removeFirst();
        linkedlist.print();
        System.out.println(size);
        linkedlist.removeLast();
        linkedlist.print();
        System.out.println(size);
    }

}
