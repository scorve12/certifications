public class equals1 {
    public static void main(String[] args) {
        String a1 = "abcd";
        String a2 = "abcd";
        String a3 = new String("abcd"); //heap의 메모리에 저장된 객체
        Boolean b1, b2;
        b1 = (a1 == a2) && (a1 == a3);
        b2 = (a1.equals(a2)) && (a1.equals(a3)); // 내부의 문자열 값을 비교
        System.out.println(b1);
        System.out.println(b2);
    }
}