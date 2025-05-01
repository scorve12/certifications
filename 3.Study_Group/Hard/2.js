// 문제 2: 메모리 누수가 있는 이벤트 캐시
class EventManager {
    constructor() {
      this.cache = new Map();
      this.counter = 0;
    }
  
    addListener(element, eventType, callback) {
      const id = this.counter++;
      element.addEventListener(eventType, callback);
      
      // 참조 저장
      this.cache.set(id, {
        element,
        eventType,
        callback,
        metadata: new Array(10000).fill('데이터') // 큰 메타데이터
      });
      
      return id;
    }
  
    removeListener(id) {
      const handler = this.cache.get(id);
      if (handler) {
        const { element, eventType, callback } = handler;
        element.removeEventListener(eventType, callback);
        this.cache.delete(id);
      }
    }
  }
  
  // DOM 요소가 제거될 때 사용 예시
  function setupPage() {
    const eventManager = new EventManager();
    const button = document.createElement('button');
    
    const id = eventManager.addListener(button, 'click', () => {
      console.log('버튼 클릭됨');
    });
    
    document.body.appendChild(button);
    
    // 나중에 DOM에서 요소 제거
    document.body.removeChild(button);
    // removeListener를 호출하지 않음 - 메모리 누수 발생
  }
  
  // 테스트를 위한 실행 함수
  function testMemoryLeak() {
    console.log('페이지 설정 및 메모리 누수 테스트 시작');
    
    // 여러 번 설정 및 제거 반복
    for (let i = 0; i < 10; i++) {
      setupPage();
    }
    
    console.log('메모리 누수 테스트 완료');
    console.log('힙 스냅샷을 확인하여 메모리 누수 여부를 확인해보세요');
  }
  
  // 테스트 실행
  testMemoryLeak();
  
  /*
  디버깅 도전 과제:
  1. 코드에서 메모리 누수가 발생하는 부분을 찾으세요
  2. DOM 요소가 제거될 때 이벤트 리스너도 함께 제거되도록 코드를 수정하세요
  3. WeakMap을 사용하여 메모리 누수를 방지할 수 있는 방법을 고려해보세요
  4. MutationObserver를 사용하여 DOM 요소 제거를 감지하고 자동으로 리스너를 정리하는 개선된 EventManager를 구현해보세요
  */