// 문제 5: 순환 참조 JSON 직렬화
function saveUserData() {
    const user = {
      id: 1,
      name: "홍길동",
      metadata: {}
    };
    
    // 순환 참조 생성
    user.metadata.user = user;
    
    try {
      // 로컬 스토리지에 저장 시도
      const serialized = JSON.stringify(user);
      localStorage.setItem('currentUser', serialized);
      return true;
    } catch (error) {
      console.error("저장 실패:", error);
      return false;
    }
  }
  
  // 테스트
  function testCircularJSON() {
    console.log("순환 참조 JSON 직렬화 테스트 시작");
    
    const result = saveUserData();
    console.log("저장 성공?", result);
    
    if (result) {
      try {
        // 저장된 데이터 복원 시도
        const retrieved = localStorage.getItem('currentUser');
        const parsed = JSON.parse(retrieved);
        console.log("복원된 사용자:", parsed);
        
        // 순환 참조가 보존되었는지 확인
        console.log("순환 참조 보존됨?", parsed.metadata.user === parsed);
      } catch (error) {
        console.error("복원 실패:", error);
      }
    }
  }
  
  // 테스트 실행 (브라우저 환경 필요)
  // 브라우저가 아닌 환경에서는 아래 주석을 해제하고 
  // localStorage polyfill을 구현하여 테스트할 수 있습니다
  /*
  if (typeof localStorage === 'undefined') {
    global.localStorage = {
      _data: {},
      setItem: function(id, val) { this._data[id] = String(val); },
      getItem: function(id) { return this._data[id] || null; },
      removeItem: function(id) { delete this._data[id]; },
      clear: function() { this._data = {}; }
    };
  }
  */
  
  testCircularJSON();
  
  /*
  디버깅 도전 과제:
  1. 순환 참조가 있는 객체를 JSON으로 직렬화할 때 발생하는 문제를 이해하세요
  2. JSON.stringify의 replacer 함수를 사용하여 순환 참조를 처리하는 방법을 구현해보세요
  3. 복원 시 reviver 함수를 사용하여 원래의 순환 참조 구조를 복원하는 방법을 구현해보세요
  4. 라이브러리를 사용하지 않고 수동으로 순환 참조를 감지하고 처리하는 방법을 설계해보세요
  5. WeakMap을 활용하여 효율적으로 순환 참조를 처리하는 방법을 구현해보세요
  */