class Solution344 {
    public static void reverseString(char[] s) {
        for (int i = 0, j = s.length - 1; i < s.length / 2; i++, j--) {
            char temp1 = s[i];
            char temp2 = s[j];

            s[i] = temp2;
            s[j] = temp1;
        }
    }

    public static void main(String[] args) {

        char[] arr = {'h', 'e', 'l', 'l', 'o'};
        reverseString(arr);
    }
}
