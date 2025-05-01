// 문제 6: 클로저와 비동기 루프
function loadImagesSequentially(imageUrls) {
    let chain = Promise.resolve();
    const loadedImages = [];
    
    for (var i = 0; i < imageUrls.length; i++) {
      chain = chain.then(() => {
        console.log(`이미지 ${i} 로딩 중...`); // i 값이 예상과 다름
        return loadImage(imageUrls[i])
          .then(img => {
            loadedImages.push(img);
            return loadedImages;
          });
      });
    }
    
    return chain;
  }
  
  function loadImage(url) {
    return new Promise((resolve) => {
      console.log(`URL ${url} 로딩 중...`);
      // 이미지 로딩 시뮬레이션
      setTimeout(() => resolve(`로딩된 ${url}`), 100);
    });
  }
  
  // 테스트
  function testAsyncLoop() {
    console.log("비동기 루프 테스트 시작");
    
    const urls = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    loadImagesSequentially(urls)
      .then(images => {
        console.log("모든 이미지 로딩 완료:", images);
        // 예상: ['로딩된 image1.jpg', '로딩된 image2.jpg', '로딩된 image3.jpg']
        // 실제: ? (디버깅을 통해 확인하세요)
      })
      .catch(error => {
        console.error("이미지 로딩 실패:", error);
      });
  }
  
  // 테스트 실행
  testAsyncLoop();
  
  /*
  디버깅 도전 과제:
  1. 비동기 루프에서 var로 선언된 루프 변수(i)가 클로저에 미치는 영향을 이해하세요
  2. 콘솔 로그에서 i 값이 예상과 다른 이유를 설명해보세요
  3. loadImage 함수에 전달되는 URL이 undefined인 이유를 찾아내세요
  4. 다음 방법을 사용하여 문제를 해결해보세요:
     a) let을 사용하여 블록 스코프 변수로 변경
     b) 즉시 실행 함수(IIFE)를 사용하여 스코프 생성
     c) Array.forEach 또는 Array.map과 Promise.all을 사용하여 코드 리팩토링
  5. 각 방법의 장단점을 비교해보세요
  */