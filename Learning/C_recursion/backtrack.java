package Learning.C_recursion;

import java.util.*;

public class backtrack {
    public static void recursion(int[] array, int i, int val){
        if(i==array.length){
            System.out.print(Arrays.toString(array));
            return;
        }

        array[i] = val ;
        recursion(array, i+1, ++val);
        array[i] = array[i]-2;
    }
    public static void main(String[] args) {
        int[] array = new int[5];
        recursion(array, 0, 1);
        System.out.println(Arrays.toString(array));
    }
}