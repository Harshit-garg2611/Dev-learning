import java.util.*;

public class insertion {

    public static void main(String[] args) {
        int array[] = {7,2,-3,6,0,1};
        for(int i=1;i<array.length;i++){
            int temp = array[i];
            int j=i-1;
            while(j>=0&&array[j]>temp){
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = temp;
        }
        System.out.println(Arrays.toString(array));
    }
}