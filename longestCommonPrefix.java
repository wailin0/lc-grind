import java.util.Arrays;

class Solution {
    public static String longestCommonPrefix(String[] strs) {

        Arrays.sort(strs);
        String result = "";

        for (int i = 0; i < strs[0].length(); i++) {
            if (strs[0].charAt(i) == strs[strs.length - 1].charAt(i)) {
                result += strs[0].charAt(i);
            } else {
                break;
            }
        }

        return result;
    }

    public static void main(String[] args) {
        String[] arr = {"flower", "flow", "flight"};
        System.out.println(longestCommonPrefix(arr));
    }
}
