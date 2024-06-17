package Learning.A_sorting;

import java.util.*;
public class inbuilt {
    public static void main(String[] args) {
        int[] array = {6,4,2,-1,8,9};

        Arrays.sort(array);
        System.out.println("ascending : "+Arrays.toString(array));
        // Arrays.sort(array, Collections.reverseOrder());   
        // the above method only works on object type (non primitive)
        Integer[] arr = {6,4,2,-1,8,9};
        Arrays.sort(arr, Collections.reverseOrder());   
        System.out.println("Descending : "+Arrays.toString(arr));

        ArrayList<Integer> list = new ArrayList<>();
        list.add(4);
        list.add(3);
        list.add(-1);
        list.add(8);
        list.add(-8);
        Collections.sort(list);
        System.out.println(list);

    }
    
}
