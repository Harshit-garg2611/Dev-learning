import java.util.*;

public class selection {

    public static void main(String[] args) {
        int array[] = {7,2,-3,6,0,1};
      for(int i=0;i<array.length-1;i++){
        int min = i;
        for(int j=i+1;j<array.length;j++){
            if(array[min]>array[j]){
                min=j;
            }
        }
            int temp = array[min];
            array[min] = array[i];
            array[i] = temp;
      }

        System.out.println(Arrays.toString(array));
    }
}