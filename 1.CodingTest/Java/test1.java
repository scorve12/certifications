class Person {
    String name;

    Person(String name) {
        this.name = name;
    }
    public static String get() {
        //return name; <- static 메서드에서 인스턴스 변수에 접근할 수 없음
        return "get";
    }

    void print() {
        System.out.println("Name: " + name);
    }
}

public class test1 {
    public static void main(String[] args) {
        Person obj = new Person("Kim");
        obj.print();
    }
}
