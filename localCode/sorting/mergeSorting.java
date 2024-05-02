
import java.util.*;
public class mergeSorting {
    public static void sort(int[] array, int si, int ei) {
        if (si>=ei) {
            return;
        }
        int mid = si + (ei - si) / 2;
        sort(array, si, mid);
        sort(array, mid + 1, ei);
        merge(array, si, mid, ei);

    }

    public static void merge(int[] array, int si, int mid, int ei) {
        
        int i = si;
        int j = mid + 1;
        int temp[] = new int[ei - si + 1];
        int index = 0;
        while (i <= mid && j <= ei) {
            if (array[i] < array[j]) {
                temp[index++] = array[i++];
            } else {
                temp[index++] = array[j++];
            }
        }
        while (i <= mid) {
            temp[index++] = array[i++];
        }
        while (j <= ei) {
            temp[index++] = array[j++];
        }
        i=si;
        for(int k=0;k<temp.length;k++){
            array[i++]=temp[k];
        }
    }

    public static void main(String[] args) {
        int[] array = { 4, 2, 9, 1, -4 };
        sort(array, 0, array.length - 1);
        System.out.println(Arrays.toString(array));

    }
}
