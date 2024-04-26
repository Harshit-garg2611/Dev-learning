import java.util.*;
public class bubble{
    public static void main(String[] args) {
        int[] array = {8,3,-2,6,9};
        // outer loop : n-1 times 
        // inner loop : n-1-i times 
        for(int i=0;i<array.length-1;i++){
            boolean swap = false;
            for(int j=0;j<array.length-1-i;j++){
                if(array[j]>array[j+1]){
                    int temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                    swap=true;
                }
                if(!swap){
                    break;
                }
            }
        }
        System.out.println(Arrays.toString(array));
    }
}

