import java.util.Arrays;

class Solution1 {
    public static int[] twoSum(int[] arr, int target) {

        for (int i=0;i<arr.length;i++){
            for (int j=i+1;j<arr.length;j++){
                if (arr[i]+arr[j]==target){
                    return new int[] {i,j};
                }
            }
        }

        return arr;
    }

    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        int target = 7;
        System.out.println(Arrays.toString(twoSum(arr, target)));

    }

}
