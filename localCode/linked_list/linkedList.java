package localCode.linked_list;

public class linkedList {
    static class Node{
        int data;
        Node next;
        public  Node(int data){
            this.data=data;
            this.next=null;
        }
    }
    public static Node head;
    public static Node tail;
    public static int size;
    // operations.....................



    // add first
    public static void addFirst(int data){
        // step 1 : creation of new node 
        Node newNode = new Node(data);
        if(head==null){
            head=tail=newNode;
            size++;
            return;
        }
        newNode.next=head;
        head=newNode;
        size++;
    }


    // add last 
    public static void addLast(int data){
        Node newNode = new Node(data);
        if(head==null){
            head=tail=newNode;
            size++;
            return;
        }
        tail.next=newNode;
        tail=newNode;
        size++;
    }


    // print 0(n)
    public static void print(){
        if(head==null){
            System.out.println("null");
            return;
        }
         Node temp = head;
         while(temp!=null){
            System.out.print(temp.data +"->");
            temp = temp.next;
         }
         System.out.println("null");
    }


    // add in middle 
    public static void addMid(int data, int index){
        Node newNode = new Node(data);
        if(head==null){
            head=tail=newNode;
            size++;
            return;
        }
        if(index==0){
            newNode.next=head;
            head=newNode;
            size++;
            return;
        }
        Node temp = head;
        int i = 0;
        while(i<index-1){
            temp = temp.next;
            i++;
        }
        newNode.next=temp.next;
        temp.next=newNode;
        size++;
    }



    //  remove first 
    public static void removeFirst(){
        if(head==null){
            return;
        }
        if(size==1){
            head=tail=null;
            size--;
            return;
        }
        head=head.next;
        size--;
    }



    // remove last 
    public static void  removeLast(){
        if(head==null){
            return;
        }
        if(size==1){
            head=tail=null;
            size--;
            return;
        }
        Node temp = head;
        int i=0;
        while(i<size-2){
            temp=temp.next;
            i++;
        }
        temp.next=null;
        tail=temp;
        size--;
    }

    public static void main(String[] args) {
        // object of class linkedList
        // linkedList ll = new linkedList();
        // removeLast();
        // print();
        // ll.addFirst(4);
        // print();
        // removeLast();
        // print();
        // ll.addFirst(3);
        // ll.addFirst(1);
        // removeLast();
        // print();
        // System.out.println(size);
        // ll.addLast(6);
        // ll.addLast(8);
        // print();
        // System.out.println(size);
        // ll.addMid(2, 1);
        // ll.removeLast();
        // // ll.addMid(7, 5);
        // print();
        // System.out.println(size);
    }
}