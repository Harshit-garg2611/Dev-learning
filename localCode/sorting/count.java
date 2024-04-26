import java.util.*;

public class count {

    public static void main(String[] args) {
        int array[] = { 7, 2, 6, 1, 7, 2, 6 };
        int max = Integer.MIN_VALUE;
        for (int element : array) {
            max = Math.max(max, element);
        }
        int[] count = new int[max + 1];
        for (int i = 0; i < array.length; i++) {
            count[array[i]]++;
        }
        int index = 0;
        for (int i = 0; i < count.length; i++) {
            while (count[i] > 0) {
                array[index++] = i;
                count[i]--;
            }
        }

        System.out.println(Arrays.toString(array));
    }
}