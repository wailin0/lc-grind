import java.util.Arrays;
import java.util.Stack;

class Solution20 {
    public static boolean validParentheses(String s) {
        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') {
                stack.push(s.charAt(i));
            } else {
                if (stack.empty()){
                    return false;
                }
                else if (s.charAt(i) == ')' && stack.peek() == '(') {
                    stack.pop();
                } else if (s.charAt(i) == ']' && stack.peek() == '[') {
                    stack.pop();
                } else if (s.charAt(i) == '}' && stack.peek() == '{') {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.empty();
    }

    public static void main(String[] args) {

        System.out.println(validParentheses("{[]}"));
    }

}
