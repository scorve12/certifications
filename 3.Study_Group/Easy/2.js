// 간단한 문제 2: 문자열과 숫자 연산 버그
// 이 함수는 장바구니의 총 금액을 계산하려고 합니다
function calculateTotal(items) {
  let total = 0;
  
  for (let i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
  
  return total;
}

// 테스트
const cart = [
  { name: "티셔츠", price: "15000" },
  { name: "청바지", price: "29000" },
  { name: "양말", price: "3000" }
];

const total = calculateTotal(cart);
console.log("장바구니 총액:", total); // 예상: 47000, 실제: "015000290003000"

/*
디버깅 과제:
1. 왜 숫자들이 더해지지 않고 문자열로 연결되는지 이해하세요
2. 문자열을 숫자로 변환하여 문제를 해결해보세요
3. 숫자 형변환을 위한 다양한 방법(Number(), parseInt(), +, parseFloat() 등)을 비교해보세요
*/