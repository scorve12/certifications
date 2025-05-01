// 문제 1: 프로토타입 오염(Prototype Pollution)
// 이 코드는 깊은 병합 함수를 구현하려고 하지만 보안 취약점이 있습니다
function deepMerge(target, source) {
  for (let key in source) {
    if (source[key] && typeof source[key] === 'object') {
      if (!target[key]) target[key] = {};
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
const malicious = JSON.parse('{"__proto__": {"malicious": true}}');
deepMerge({}, malicious);

// 모든 객체가 오염되었는지 확인
const innocent = {};
console.log(innocent.malicious); // true - 보안 문제!

/*
디버깅 도전 과제:
1. 프로토타입 오염 취약점을 찾아내고 이해하세요
2. deepMerge 함수를 보안 취약점 없이 안전하게 수정하세요
3. 악의적인 입력에도 프로토타입이 오염되지 않도록 방어 코드를 추가하세요
*/