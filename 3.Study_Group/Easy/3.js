// 간단한 문제 3: 배열 복사와 참조 문제
// 이 함수는 원래 배열을 변경하지 않고 정렬된 새 배열을 반환하려고 합니다
function getSortedArray(array) {
    const sortedArray = array;
    sortedArray.sort((a, b) => a - b);
    return sortedArray;
  }
  
  // 테스트
  const originalNumbers = [5, 3, 9, 1, 7];
  console.log("정렬 전 원본 배열:", originalNumbers);
  
  const sortedNumbers = getSortedArray(originalNumbers);
  console.log("정렬된 배열:", sortedNumbers);
  console.log("정렬 후 원본 배열:", originalNumbers); // 원본도 변경됨!
  
  /*
  디버깅 과제:
  1. 왜 원본 배열이 변경되는지 이해하세요 (배열 참조 vs 복사)
  2. 배열을 복사하는 다양한 방법을 사용하여 문제를 해결해보세요:
     - 스프레드 연산자 [...array]
     - Array.slice()
     - Array.from()
     - Array.concat()
  3. 각 복사 방법의 장단점을 비교해보세요
  */