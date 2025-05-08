// 문제 1: 프로토타입 오염(Prototype Pollution)
// 이 코드는 깊은 병합 함수를 구현하려고 하지만 보안 취약점이 있습니다
const keypass = (key) => {
  // 키가 __proto__인 경우 true를 반환합니다
  return key === '__proto__';
}
function deepMerge(target = Object.create(null), source) {
  
  for (let key of Object.keys(source)) {
    if (keypass(key)) continue; // __proto__ 키를 건너뜁니다
    if (source[key] && typeof source[key] === 'object') {
      if (!target[key]) target[key] = Object.create(null);
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }

  return target;
}

// 테스트
const userConfig = {};
const defaultConfig = { theme: { color: 'blue' } };
const mergedConfig = deepMerge(userConfig, defaultConfig);
console.log(mergedConfig.theme.color); // 'blue'

// 이제 악의적인 입력을 시도해봅시다
const malicious = JSON.parse('{"__proto__": {"malicious": true}}'); // 악의 적인 입력
deepMerge({}, malicious);

// 모든 객체가 오염되었는지 확인
const innocent = {};
console.log(innocent.malicious); // true - 보안 문제!

/*
디버깅 도전 과제:
1. 프로토타입 오염 취약점을 찾아내고 이해하세요
  : "__proto__" 속성을 사용하여 객체의 프로토타입을 변경할 수 있습니다
  : innocent.malicious = true로 인해 innocent 객체의 프로토타입에 malicious 속성이 추가되었습니다
  : deepMerge({}, malicious) 호출로 인해 모든 객체의 프로토타입이 오염되었습니다
  : {}: 빈 객체를 생성할 때 Object.prototype을 상속받습니다


2. deepMerge 함수를 보안 취약점 없이 안전하게 수정하세요 : 
  : Object.create(null): 오브젝트를 생성할 때 프로토타입을 null로 설정하여 기본 객체의 속성을 상속받지 않도록 합니다

3. 악의적인 입력에도 프로토타입이 오염되지 않도록 방어 코드를 추가하세요
  function deepMerge(target = Object.create(null), source) {
     for (let key of Object.keys(source)) {
       if (source[key] && typeof source[key] === 'object') {
         if (!target[key]) target[key] = Object.create(null);
         deepMerge(target[key], source[key]);
       } else {
         target[key] = source[key];
       }
     }
     return target;
   }
   
*/