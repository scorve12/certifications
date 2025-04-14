import java.util.Scanner;

public class UserInputExample {
    public static void main(String[] args) {
        // Scanner 객체 생성 (System.in은 표준 입력 스트림)
        Scanner scanner = new Scanner(System.in);
        
        // 문자열 입력 받기
        System.out.print("이름을 입력하세요: ");
        String name = scanner.nextLine();
        
        // 정수 입력 받기
        System.out.print("나이를 입력하세요: ");
        int age = scanner.nextInt();
        
        // 실수 입력 받기
        System.out.print("키를 입력하세요 (m): ");
        double height = scanner.nextDouble();
        
        // 입력받은 정보 출력
        System.out.println("===== 입력 정보 =====");
        System.out.println("이름: " + name);
        System.out.println("나이: " + age);
        System.out.println("키: " + height + "m");
        
        // Scanner 닫기 (자원 해제)
        scanner.close();
    }
}