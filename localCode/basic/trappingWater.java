//  solving this question with auxilliary space 

public class trappingWater{
    public static void main(String[] args) {
        int[] height = {0,1,0,2,1,0,1,3,2,1,2,1};
        int n = height.length;
        int left_max[] = new int[n];
        int right_max[] = new int[n];
        left_max[0]=height[0];
        for(int i=1;i<n;i++){
            left_max[i]=Math.max(left_max[i-1],height[i]);
        }
    
        right_max[n-1]=height[n-1];
        for(int i=n-2;i>=0;i--){
            right_max[i]=Math.max(right_max[i+1],height[i]);
        }
        int trapped = 0;
        for(int i=0;i<n;i++){
            trapped+= (Math.min(left_max[i],right_max[i])-height[i]);
        }
        System.out.println(trapped);
    }

}