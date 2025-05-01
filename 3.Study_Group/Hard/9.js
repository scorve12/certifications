// 문제 9: 프록시 객체와 Reflect API의 예상치 못한 동작
function createSecureObject(object) {
    return new Proxy(object, {
      get: function(target, prop, receiver) {
        if (prop.startsWith('_')) {
          console.warn(`접근 시도: 보안 속성 ${prop}에 접근할 수 없습니다`);
          return undefined;
        }
        return Reflect.get(target, prop, receiver);
      },
      
      set: function(target, prop, value, receiver) {
        if (prop.startsWith('_')) {
          console.warn(`수정 시도: 보안 속성 ${prop}을(를) 수정할 수 없습니다`);
          return false;
        }
        return Reflect.set(target, prop, value, receiver);
      },
      
      has: function(target, prop) {
        if (prop.startsWith('_')) {
          return false;
        }
        return Reflect.has(target, prop);
      }
    });
  }
  
  // 테스트
  function testSecureProxy() {
    console.log("보안 프록시 테스트 시작");
    
    const user = {
      name: "김철수",
      _password: "비밀1234",
      checkPassword: function(input) {
        return input === this._password;
      }
    };
    
    const secureUser = createSecureObject(user);
    
    // 일반 속성 접근
    console.log("이름:", secureUser.name); // "김철수"
    
    // 보안 속성 직접 접근
}