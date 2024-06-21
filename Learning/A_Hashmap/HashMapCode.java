package Learning.A_Hashmap;

import java.util.*;

public class HashMapCode {
    static class HashMap<K,V> {
        private class Node{
            K key;
            V value;

            public Node(K key, V value){
                this.key = key;
                this.value = value;
            }
        }

        // initilaization 
        private int N ; // bucket size 
        private int n ; // no. of total nodes 
        private LinkedList<Node> buckets[] ; // array of name buckets contains linked list 
        
        @SuppressWarnings("Unchecked")

        public HashMap(){
            this.N = 4 ;
            this.buckets = new LinkedList[4];
            for(int i=0;i<4;i++){
                buckets[i] = new LinkedList<>();
            }
        }

        private int hashFunction(K key){
            int hc = key.hashCode();
            return Math.abs(hc)%N ;
        }

        private int SearchInLL(K key, int bi){
            LinkedList<Node> ll = buckets[bi];
            int di = 0;
            for(int i=0;i<ll.size();i++){
                Node node = ll.get(i);
                if(node.key==key){
                    return di;
                }else{
                    di++;
                }
            }
            return -1;
        }

        public void rehash(){
            LinkedList<Node> oldBucket[] = buckets;
            buckets = new LinkedList[N*2];
            N = N*2;
            for(int i=0;i<oldBucket.length;i++){
            }
        }
    }
}
