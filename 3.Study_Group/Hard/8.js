// 문제 8: 이벤트 발행/구독 패턴의 메모리 누수
class EventBus {
    constructor() {
      this.subscribers = {};
    }
    
    subscribe(event, callback) {
      if (!this.subscribers[event]) {
        this.subscribers[event] = [];
      }
      this.subscribers[event].push(callback);
      
      // 구독 취소 함수 반환
      return () => {
        this.unsubscribe(event, callback);
      };
    }
    
    unsubscribe(event, callback) {
      if (!this.subscribers[event]) return;
      
      const index = this.subscribers[event].indexOf(callback);
      if (index !== -1) {
        this.subscribers[event].splice(index, 1);
      }
    }
    
    publish(event, data) {
      if (!this.subscribers[event]) return;
      
      for (const callback of this.subscribers[event]) {
        callback(data);
      }
    }
  }
  
  // 사용 예시
  class Component {
    constructor(name) {
      this.name = name;
      this.data = new Array(1000).fill(`${name} 데이터`);
      
      // DOM 이벤트 리스너처럼 사용
      this.clickHandler = this.handleClick.bind(this);
      eventBus.subscribe('click', this.clickHandler);
    }
    
    handleClick(data) {
      console.log(`${this.name}이(가) 클릭 이벤트 처리:`, data);
    }
    
    destroy() {
      // 구독 취소 호출 누락 - 메모리 누수
      // eventBus.unsubscribe('click', this.clickHandler);
      console.log(`${this.name} 컴포넌트 제거됨`);
    }
  }
  
  // 테스트
  function testEventBusMemoryLeak() {
    console.log("이벤트 버스 메모리 누수 테스트 시작");
    
    // 전역 이벤트 버스 생성
    window.eventBus = new EventBus();
    
    createAndDestroyComponents();
    
    // 이벤트 발행 - 삭제된 컴포넌트들이 여전히 응답함!
    console.log("클릭 이벤트 발행 - 삭제된 컴포넌트들이 응답할 것인가?");
    eventBus.publish('click', { timestamp: Date.now() });
    
    // 메모리 사용량 확인
    console.log("현재 구독자 수:", 
      eventBus.subscribers['click'] ? eventBus.subscribers['click'].length : 0);
  }
  
  function createAndDestroyComponents() {
    console.log("컴포넌트 생성 및 파괴 시작");
    
    // 많은 컴포넌트 생성 및 파괴
    for (let i = 0; i < 10; i++) {
      const component = new Component(`컴포넌트${i}`);
      // 즉시 컴포넌트 제거
      component.destroy();
    }
    
    console.log("컴포넌트 생성 및 파괴 완료");
  }
  
  // 브라우저 환경에서 실행
  // 노드 환경에서는 global을 window로 사용할 수 있습니다
  if (typeof window === 'undefined') {
    global.window = global;
  }
  
  // 테스트 실행
  testEventBusMemoryLeak();
  
  /*
  디버깅 도전 과제:
  1. Component.destroy 메서드에서 이벤트 구독을 취소하지 않아 발생하는 메모리 누수를 식별하세요
  2. 구독 취소가 적절히 이루어지도록 Component 클래스를 수정하세요
  3. WeakRef나 FinalizationRegistry를 사용하여 Component 객체가 가비지 컬렉션될 때 자동으로 구독을 취소하는 메커니즘을 구현해보세요
  4. 구독 취소 함수를 저장하고 사용하는 더 안전한 패턴을 설계해보세요
  5. 이벤트 버스에 약한 참조(weak reference)를 사용하여 메모리 누수를 방지하는 방법을 구현해보세요
  */ㅍ