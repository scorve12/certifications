// 간단한 문제 5: this 컨텍스트 오류
// 이 객체는 사용자의 구매 이력을 관리하려고 합니다
const shoppingHistory = {
    purchases: [
      { item: "노트북", price: 1200000 },
      { item: "마우스", price: 35000 },
      { item: "키보드", price: 98000 }
    ],
    
    totalSpent: 0,
    
    calculateTotal: function() {
      this.totalSpent = 0;
      
      this.purchases.forEach(function(purchase) {
        this.totalSpent += purchase.price;
      });
      
      return this.totalSpent;
    }
  };
  
  // 테스트
  const total = shoppingHistory.calculateTotal();
  console.log("총 구매 금액:", total); // 예상: 1333000, 실제: 0
  
  /*
  디버깅 과제:
  1. forEach의 콜백 함수 내에서 this가 어떻게 바인딩되는지 이해하세요
  2. 다음 방법을 사용하여 문제를 해결해보세요:
     - 화살표 함수 사용
     - 외부 변수에 this 저장하기 (var that = this)
     - Function.prototype.bind() 사용
     - forEach의 두 번째 인자로 this 컨텍스트 전달하기
  3. 각 해결책의 장단점을 비교해보세요
  */