// 문제 4: 프라미스 체인의 오류 처리
function processData(data) {
    return Promise.resolve(data)
      .then(step1)
      .then(step2)
      .then(step3)
      .catch(err => {
        console.error("Error:", err);
        return { error: true };
      });
  }
  
  function step1(data) {
    console.log("Step 1 처리중");
    return { ...data, step1: true };
  }
  
  function step2(data) {
    console.log("Step 2 처리중");
    throw new Error("Step 2 실패!");
    return { ...data, step2: true };
  }
  
  function step3(data) {
    console.log("Step 3 처리중");
    return { ...data, step3: true };
  }
  
  // 테스트
  function testPromiseChain() {
    console.log("프라미스 체인 테스트 시작");
    
    processData({ initial: true })
      .then(result => {
        console.log("최종 결과:", result);
        
        // 여기서 추가 처리를 시도하지만 에러 객체에는 예상한 속성이 없음
        if (result.step3) {
          doFinalStep(result);
        } else {
          console.log("최종 단계 건너뜀");
        }
      });
  }
  
  function doFinalStep(data) {
    console.log("최종 단계 실행:", data);
  }
  
  // 테스트 실행
  testPromiseChain();
  
  /*
  디버깅 도전 과제:
  1. 프라미스 체인에서 오류가 발생했을 때 실행 흐름을 추적하세요
  2. catch 블록이 반환하는 객체에 필요한 속성이 없어서 발생하는 문제를 찾아내세요
  3. 오류 발생 시에도 최종 단계가 실행될 수 있도록 코드를 수정하세요
  4. 각 단계에서 발생한 오류를 보존하면서도 필요한 데이터를 계속 전달할 수 있는 방법을 구현해보세요
  5. Promise.allSettled()를 사용하여 일부 단계가 실패해도 가능한 모든 작업을 완료하도록 리팩토링해보세요
  */