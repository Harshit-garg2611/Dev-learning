package Learning.C_recursion;

public class Sorted {
    public static boolean isSorted(int[] array, int index){
        if(index==array.length-1){
            return true;
        }
        if(array[index]>array[index+1]){
            return false;
        }
        return isSorted(array, index+1);
    }
    public static void main(String[] args) {
        int[] array = {3,1,7,3,8};
        System.out.println(isSorted(array, 0));

    }
    
}
