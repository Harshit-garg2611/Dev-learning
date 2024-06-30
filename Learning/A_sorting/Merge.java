package Learning.A_sorting;

import java.util.*;
public class Merge {
    public static void merge(int[] array, int si, int ei){
        if(si>=ei){
            return;
        }
        int mid = si + (ei-si)/2; 
        merge(array, si, mid);
        merge(array, mid+1, ei);
        mergeSort(array, si, mid, ei);
    }

    public static void mergeSort(int[] array, int si, int mid, int ei){
        int temp[] = new int[ei-si+1];

        int i=si;
        int j=mid+1;
        int k=0;

        while(i<=mid && j<=ei){
            if(array[i]>array[j]){
                temp[k++] = array[j++];
            }else{
                temp[k++] = array[i++];
            }
        }

        while(i<=mid){
            temp[k++] = array[i++];
        }

        while(j<=ei){
            temp[k++] = array[j++];
        }


        for(i=si,k=0;k<temp.length;i++,k++){
            array[i]=temp[k];
        }
    }
    public static void main(String[] args) {
        int array[] = {4,2,-9,6,4};
        merge(array, 0, array.length-1);
        System.out.println(Arrays.toString(array));
    }
    
}
