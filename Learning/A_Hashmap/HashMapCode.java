package Learning.A_Hashmap;

import java.util.LinkedList;

import java.util.ArrayList;

public class HashMapCode {
    static class HashMap<K, V> {
        private class Node {
            K key;
            V value;

            public Node(K key, V value) {
                this.key = key;
                this.value = value;
            }
        }

        private int N; // bucket size
        private int n; // number of nodes
        private LinkedList<Node> buckets[]; // declare the array of linked list that contains node

        @SuppressWarnings("unchecked")

        public HashMap() {
            this.N = 4;
            this.buckets = new LinkedList[4];
            for (int i = 0; i < 4; i++) {
                this.buckets[i] = new LinkedList<>();
                // if we don't create this only empty array is there after this at each index
                // empty linked list is created
            }
        }

        // hash function to find bucket index
        private int hashFunction(K key) {
            int hc = key.hashCode();
            return Math.abs(hc) % N;
        }

        private int searchInLL(K key, int bi) {
            LinkedList<Node> ll = buckets[bi];
            int di = 0;
            for (int i = 0; i < ll.size(); i++) {
                Node node = ll.get(i);
                if (node.key == key) {
                    return di;
                } else {
                    di++;
                }
            }
            return -1;
        }
        @SuppressWarnings("unchecked")
        private void rehash() {
            LinkedList<Node> oldBucket[] = buckets;
            buckets = new LinkedList[N * 2];
            N = N * 2;
            for (int i = 0; i < buckets.length; i++) {
                buckets[i] = new LinkedList<>();
            }

            // nodes add in bucket
            for (int i = 0; i < oldBucket.length; i++) {
                LinkedList<Node> ll = oldBucket[i];
                for (int j = 0; j < ll.size(); j++) {
                    Node node = ll.remove();
                    put(node.key, node.value);
                }
            }
        }

        public void put(K key, V value){  // O(lambda) 
            int bi = hashFunction(key); // 0 - 3
            int di = searchInLL(key, bi); // valid imdex , -1 
            if(di!=-1){
                Node node = buckets[bi].get(di);
                node.value = value;
            }else{
                buckets[bi].add(new Node(key, value));
                n++;
            }
            double lamda = (double)(n/N);
            if(lamda>2.0){
                rehash();
            }
        }
        public boolean containsKey(K key){  // 0(1)
            int bi = hashFunction(key); // 0 - 3
            int di = searchInLL(key, bi); // valid imdex , -1 
            if(di==-1){
                return false;
            }
            return true;
        }
        public V get(K key){ // 0(1)
            int bi = hashFunction(key); // 0 - 3
            int di = searchInLL(key, bi); // valid imdex , -1 
            if(di!=-1){
                Node node = buckets[bi].get(di);
                return node.value ;
            }else{
              return null;
            }
        }
        public V remove(K key){
            int bi = hashFunction(key); // 0 - 3
            int di = searchInLL(key, bi); // valid imdex , -1 
            if(di!=-1){
                Node node = buckets[bi].remove(di);
                n--;
                return node.value;
            }else{
                return null;
            }
        }
        public ArrayList<K> keySet(){
            ArrayList<K> keys = new ArrayList<>();
            for(int i=0;i<buckets.length;i++){
                LinkedList<Node> ll = buckets[i];
                for(Node node : ll){
                    keys.add(node.key);
                }
            }
            return keys;
        }
        public boolean isEmpty(){
            return n==0;
        }
    }
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("India", 1);
        map.put("Russia", 2);
        map.put("Nepal", 3);
        map.put("China", 4);
        System.out.println(map.containsKey("sri"));
    }
}
