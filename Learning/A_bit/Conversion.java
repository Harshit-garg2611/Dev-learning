package Learning.A_bit;

public class Conversion {
    public static int binTodec(int n) {
        int dec = 0;
        int pow = 0;
        while (n > 0) {
            int lastDigit = n % 10;
            dec += lastDigit * (int) Math.pow(2, pow);
            pow++;
            n = n / 10;
        }
        return dec;

    }

    public static int decTobin(int n) {
        int bin = 0;
        int pow = 0;
        while(n>0){
            int remainder = n % 2;
            bin  += (remainder*(int) Math.pow(10, pow)) ; 
            pow++;
            n = n/2;
        }
        return bin;
    }

    public static void main(String[] args) {
        int a = 10101010;
        // System.out.println(binTodec(a));
        int b = binTodec(a);
        System.out.println(b);
        int c = decTobin(b);
        System.out.println(c);
    }

}
