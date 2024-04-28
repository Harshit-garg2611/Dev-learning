class Solution {
    public int compress(char[] chars) {
        int j=0;
        for(int i=0;i<chars.length;i++){
            int count = 1;
            while(i<chars.length-1 && chars[i]==chars[i+1]){
                count++;
                i++;
            }
            chars[j++]=chars[i];
            if(count>1){
                for(char c : Integer.toString(count).toCharArray()){
                    chars[j++]=c;
                }
            }
        }
        return j;
    }
}