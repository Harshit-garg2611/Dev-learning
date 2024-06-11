package Learning.LinkedList;

public class linkedlist {
    class Node{
        int data;
        Node next;

        public Node(int data){
            this.data = data;
            this.next = null;
        }
    }

    public static Node head;
    public static Node tail;
    public static int size;

    public void addFirst(int data){
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

    public void addLast(int data){
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
    public void print(){
        if(head==null){
            return;
        }
        Node temp = head;
        while(temp!=null){
            System.out.print(temp.data +"->");
            temp=temp.next;
        }
        System.out.println("null");
    }
    public void addMid(int data, int index){
        Node newNode = new Node(data);
        if(head==null){
            head=tail=newNode;
            size++;
            return;
        }
        Node temp = head;
        int i=0;
        while(temp!=null && i<index-1){
            temp=temp.next;
            i++;
        }
        newNode.next=temp.next;
        temp.next=newNode;
        size++;
    }
    public void removeFirst(){
        if(head==null){
            return;
        }else if(head.next==null){
            head=tail=null;
            size--;
            return;
        }
        head=head.next;
        size--;
    }
    public void removeLast(){
        if(head==null){
            return;
        }else if(head.next==null){
            head=tail=null;
            size--;
            return;
        }
        Node temp = head;
        for(int i=0;i<size-2;i++){
            temp=temp.next;
        }
        temp.next=null;
        tail=temp;
        size--;
        
    }

    public static int iterative(int target){
        Node temp = head;
        int index = 0;
        while(temp!=null){
            if(temp.data==target){
                return index;
            }
            temp=temp.next;
            index++;
        }
        return -1;
    }
    public static int recursive(int target, Node head){
        if(head==null){
            return -1;
        }
        if(head.data == target){
            return 0;
        }
        int idx = recursive(target, head.next);
        if(idx==-1){
            return -1;
        }
        return idx+1;
    }
    public static void main(String[] args) {
        linkedlist ll = new linkedlist();
        ll.addFirst(5);
        ll.addFirst(3);
        ll.addFirst(1);
        ll.addLast(7);
        ll.addLast(8);
        ll.addMid(4, 2);
        ll.print();
        System.out.println(linkedlist.size);
        ll.removeFirst();
        ll.removeLast();
        ll.print();
        System.out.println(linkedlist.size);
        System.out.println("iterative : " +iterative(3));
        System.out.println("iterative : " +iterative(7));
        System.out.println("iterative : " +iterative(8));
        System.out.println("recursive : " +recursive(7, head));
        System.out.println("recursive : " +recursive(3, head));
        System.out.println("recursive : " +recursive(9, head));

    }
}
