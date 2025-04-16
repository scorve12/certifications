#include <stdio.h>

int main() {
    int a = 0xB4; // 1011 0100
    int b = 0xF0; // 1111 0000
    printf("%x\n", a ^ b); // 0100 0100
    printf("%x\n", a & b); // 1011 0000
}