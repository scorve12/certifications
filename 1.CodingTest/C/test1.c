#include <stdio.h>

int main() {
    int a = 5,  b = 1, c = 0;
    if (!c) {
        int b = 5; // shadowing
        while (b) {
            c += b;
            b--;
        }
        a = c - b;
    }
    printf("a = %d\n", a);
    printf("b = %d\n", b);
    printf("c = %d\n", c);
    return 0;
}