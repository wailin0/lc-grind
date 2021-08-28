import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution13 {
    public static int romanToInt(String s) {
        Map<Character, Integer> map = new HashMap<>();

        List<Character> list = new ArrayList<>();

        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int sum = 0;
        for (int i = 0; i < s.length()-1; i++) {
            if (map.get(s.charAt(i))<map.get(s.charAt(i+1))){
                sum-=map.get(s.charAt(i));
            }
            else {
                sum+=map.get(s.charAt(i));
            }
        }

        return sum+map.get(s.charAt(s.length()-1));
    }

    public static void main(String[] args) {
        System.out.println(romanToInt("III"));
    }
}
