import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

class Solution27 {
    public static int removeElement(int[] nums, int val) {

        int sum = 0;
        for (int i = 0; i <nums.length ; i++) {
            if (nums[i]!=val){
                sum++;
            }
            if(nums[i]==val){
                nums[i]='_';
            }
        }

        Arrays.sort(nums);
        return sum;
    }


    public static void main(String[] args) {
        int[] arr = {0,1,2,2,3,0,4,2};
        int target = 2;
        System.out.println(removeElement(arr, target));
    }
}
