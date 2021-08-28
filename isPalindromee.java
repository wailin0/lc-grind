class Solution2 {
    public static boolean isPalindrome(int x) {
        char[] arr = String.valueOf(x).toCharArray();

        for (int i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
            if (arr[i]!=arr[j]){
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {

        System.out.println(isPalindrome(-121));

    }

}
