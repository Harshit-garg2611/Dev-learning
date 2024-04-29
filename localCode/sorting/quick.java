
public class quick {
	public static int pivot(int[] input, int startIndex, int endIndex){
		int pivotPoint = endIndex;
		int i=startIndex-1;
		for(int j=startIndex;j<=endIndex;j++){
			if(input[j]<=input[pivotPoint]){
				i++;
				int temp = input[j];
				input[j]=input[i];
				input[i]=temp;
			}
		}
		return i;
	}
	public static void quickSort(int[] input, int startIndex, int endIndex) {
		/* Your class should be named Solution
		 * Don't write main().
		 * Don't read input, it is passed as function argument.
		 * No need to print or return the output.
		 * Taking input and printing output is handled automatically.
		 */
		 if(startIndex>=endIndex){
			 return;
		 }
		 int pivotIndex = pivot(input, startIndex,endIndex);
		 quickSort(input,startIndex,pivotIndex-1);
		 quickSort(input,pivotIndex+1,endIndex);
	}
	
}