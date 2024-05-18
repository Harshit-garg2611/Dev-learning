class Solution {
    public boolean search(int[] nums, int target) {
        int si = 0;
        int ei = nums.length - 1;
        while (si <= ei) {
            int mid = si + (ei - si) / 2;
            if (nums[mid] == target) {
                return true;
            }
            if (nums[si] == nums[mid] && nums[mid]== nums[ei]) {
                si++;
                ei--;
            }
            else if (nums[mid] >= nums[si]) {
                if (nums[si] <= target && nums[mid] > target) {
                    ei = mid - 1;
                } else {
                    si = mid + 1;
                }
            }else{
                if(target>nums[mid] && target<=nums[ei]){
                    si = mid+1;
                }else{
                    ei = mid-1;
                }
            }

        }
        return false;
    }
}