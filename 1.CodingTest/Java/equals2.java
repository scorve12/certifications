public class equals2 {
    static void func(String[] m, int n) {

        //  1, 2만 실행, 3일 때 종료
        for (int i = 1; i < n; i++) {
            if (m[i-1].equals(m[i])) {  
                System.out.print("O");
            } else {
                System.out.print("N");
            }
        }

        for (String mo : m) { // for-each loop: 배열 m의 각 요소를 mo에 대입
            System.out.print(mo);
        }
    }

    public static void main(String[] args) {
        String[] m = new String[3];
        m[0] = "A";
        m[1] = "A";
        m[2] = new String("A");  
        func(m, 3);
    }
}