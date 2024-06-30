package Learning.A_sorting;
import java.util.*;
public class Quick {
    public static void quick(int[] array, int si, int ei){
        if(si>=ei){
            return;
        }

        int pivot_index = pivot(array, si, ei);
        quick(array, si, pivot_index-1);
        quick(array, pivot_index+1, ei);
    }
    public static int pivot(int[] array, int si, int ei){
        int pivot = ei;
        int i=si-1;

        for(int j=si;j<=ei;j++){
            if(array[j]<=array[pivot]){
                i++;
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        return i;
    }

    public static void main(String[] args) {
        int array[] = {4,2,-9,6,4};
        quick(array, 0, array.length-1);
        System.out.println(Arrays.toString(array));
    }
    
}
