// 문제 7: WeakMap과 가비지 컬렉션 예상치 못한 동작
function createObjectCache() {
    const cache = new WeakMap();
    
    return {
      set: function(key, value) {
        const keyObj = key instanceof Object ? key : { key };
        cache.set(keyObj, value);
        return keyObj;
      },
      
      get: function(keyObj) {
        return cache.get(keyObj);
      }
    };
  }
  
  // 테스트
  function testWeakMapCache() {
    console.log("WeakMap 캐시 테스트 시작");
    
    const cache = createObjectCache();
    
    // 객체 키로 저장
    const user = { id: 1, name: "사용자" };
    cache.set(user, "사용자 데이터");
    console.log("객체 키로 저장된 값:", cache.get(user)); // "사용자 데이터"
    
    // 원시값으로 저장하려고 시도
    const keyObj = cache.set("username", "admin");
    console.log("원시값 키로 저장된 값:", cache.get(keyObj)); // "admin"
    
    // 나중에 같은 키로 접근하려고 시도
    console.log("문자열 키로 직접 접근:", cache.get("username")); // undefined - 예상과 다름!
    
    // 동일한 원시값으로 다시 시도
    const keyObj2 = cache.set("username", "moderator");
    console.log("새 래퍼 객체를 통한 접근:", cache.get(keyObj2)); // "moderator"
    console.log("원래 래퍼 객체를 통한 접근:", cache.get(keyObj)); // "admin" - 다른 객체임!
    
    // 가비지 컬렉션 시뮬레이션
    console.log("가비지 컬렉션 시뮬레이션 시작");
    simulateGarbageCollection();
  }
  
  function simulateGarbageCollection() {
    console.log("가비지 컬렉션이 실행되면 참조가 없는 WeakMap의 키 객체는 자동으로 제거됩니다.");
    console.log("이 시뮬레이션에서는 실제 GC를 트리거할 수 없으므로 아래 설명을 참고하세요:");
    console.log("1. keyObj 변수가 스코프를 벗어나면 해당 객체에 대한 참조가 사라집니다.");
    console.log("2. WeakMap은 키에 대한 강한 참조를 유지하지 않으므로 GC에 의해 수집됩니다.");
    console.log("3. 이후에 동일한 문자열 'username'으로 새 객체를 만들어도 원래 데이터에 접근할 수 없습니다.");
  }
  
  // 테스트 실행
  testWeakMapCache();
  
  /*
  디버깅 도전 과제:
  1. WeakMap에서 원시값을 키로 사용할 수 없는 이유를 이해하세요
  2. 원시값을 래핑한 객체를 키로 사용할 때의 문제점을 식별하세요
  3. 원시값과 객체 모두 효과적으로 캐시할 수 있는 개선된 캐시 메커니즘을 설계하세요
  4. 다음을 구현해보세요:
     a) Map과 WeakMap을 함께 사용하여 원시값과 객체 모두 지원하는 캐시
     b) 원시값을 위한 문자열 접두사와 객체를 위한 WeakMap을 사용하는 하이브리드 접근법
  5. WeakMap의 가비지 컬렉션 동작을 이해하고 메모리 누수를 방지하는 방법을 설명하세요
  */