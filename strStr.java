class Solution28 {
    public static int strStr(String haystack, String needle) {
        if (needle.isEmpty()) {
            return 0;
        }
        if (needle.length()>haystack.length()){
            return -1;
        }

        for (int i = 0; i < haystack.length(); i++) {
            if (haystack.substring(i, haystack.length()).length()>=needle.length()) {
                if (haystack.substring(i, i + needle.length()).equals(needle)) {
                    return i;
                }
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(strStr("a", "a"));
    }

}
