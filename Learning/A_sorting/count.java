package Learning.A_sorting;

import java.util.*;

public class count {
    public static void main(String[] args) {
        int array[] = {5,4,2,5,3,5,1,1,1,8,4,3};

        int largest = array[0];
        for(int i=1;i<array.length;i++){
            largest = Math.max(largest, array[i]);
        }
        // System.out.println(largest);

        int count[] = new int[largest+1];
        for(int i=0;i<array.length;i++){
            count[array[i]]++;
        }

        int j=0;
        for(int i=0;i<count.length;i++){
            while(count[i]>0){
                array[j] = i;
                count[i]--;
                j++;
            }
        }

        System.out.println(Arrays.toString(array));
        
    }
}
