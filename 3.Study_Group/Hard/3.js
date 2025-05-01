// 문제 3: 비동기 실행 컨텍스트 충돌
function UserService() {
    this.currentUser = null;
    
    this.loadUser = function(userId) {
      // 사용자 로드 시뮬레이션
      setTimeout(function() {
        this.currentUser = { id: userId, name: `User ${userId}` };
        console.log("현재 사용자:", this.currentUser);
      }, 1000);
    };
    
    this.getCurrentUser = function() {
      return this.currentUser;
    };
  }
  
  // 테스트
  function testUserService() {
    console.log("UserService 테스트 시작");
    
    const userService = new UserService();
    console.log("초기 사용자:", userService.getCurrentUser());
    
    userService.loadUser(123);
    console.log("loadUser 호출 직후 사용자:", userService.getCurrentUser());
    
    // 1초 후
    setTimeout(() => {
      console.log("1.5초 후 사용자:", userService.getCurrentUser()); 
      // null - 예상과 다름!
      // 이 시점에서는 사용자 정보가 로드되어 있어야 함
    }, 1500);
  }
  
  // 테스트 실행
  testUserService();
  
  /*
  디버깅 도전 과제:
  1. setTimeout 콜백 내부에서 this가 예상과 다르게 바인딩되는 문제를 찾아내세요
  2. this 바인딩 문제를 해결하기 위한 여러 방법(화살표 함수, bind, that 변수 등)을 시도해보세요
  3. 동일한 코드를 클래스 구문을 사용하여 재작성하고 동일한 문제가 발생하는지 확인해보세요
  4. 비동기 컨텍스트에서 this 바인딩이 어떻게 동작하는지 설명해보세요
  */