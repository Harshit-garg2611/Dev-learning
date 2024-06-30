package Learning.C_recursion;

public class Power {
    public static int brute(int x, int n){
        if(n==0){
            return 1;
        }
        return x*brute(x, n-1);
    }

    public static int optimised(int x, int n){
        if(n==0){
            return 1;
        }
        int halfPower = optimised(x, n/2);
        if(n%2==0){
            return halfPower*halfPower;
        }
        return x*halfPower*halfPower;
    }
    public static void main(String[] args) {
        // System.out.println(brute(4, 3));
        System.out.println(optimised(4, 4));
    }
    
}
