package Learning.A_sorting;

import java.util.*;

public class Main {
    public static void bubble(int[] array){
        for(int i=0;i<array.length-1;i++){
            boolean swap = false;
            for(int j=0;j<array.length-1-i;j++){
                if(array[j]>array[j+1]){
                    int temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                    swap = true;
                }
            }
            if(!swap){
                break; 
            }
        }
    }


    public static void selection(int[] array){
        for(int i=0;i<array.length;i++){
            int min  = i;
            for(int j=i+1;j<array.length;j++){
                if(array[j]<array[min]){
                    min = j;
                }
            }
            int temp = array[min];
            array[min] = array[i];
            array[i] = temp;
            
        }
    }
    
    public static void insertion(int[] array){
        for(int i=1;i<array.length;i++){
            int temp = array[i];
            int j=i-1;
            while(j>=0 && array[j]>temp){
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = temp;
        }
    }
    
    public static void main(String[] args) {
        int[] array = {2,6,1,8,-3,-5,2,0,-3};
        System.out.println(Arrays.toString(array));
        bubble(array);
        selection(array);
        insertion(array);
        System.out.println(Arrays.toString(array));
    }
}
