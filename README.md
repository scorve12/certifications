# certifications
## VS Code 설치 및 설정

1. **VS Code 설치**  
    - [VS Code 공식 웹사이트](https://code.visualstudio.com/)에 접속하여 운영 체제에 맞는 설치 파일을 다운로드합니다.
    - 설치 파일을 실행하고 지시에 따라 설치를 완료합니다.

2. **Git 설치**  
    - [Git 공식 웹사이트](https://git-scm.com/)에서 운영 체제에 맞는 설치 파일을 다운로드합니다.
    - 설치 파일을 실행하고 기본 설정으로 설치를 완료합니다.
    - 설치 후 터미널에서 `git --version` 명령어를 실행하여 설치가 완료되었는지 확인합니다.

## VS Code Code Runner 확장 설치 및 사용법

1. **Code Runner 확장 설치**  
    - VS Code를 실행합니다.
    - 왼쪽 사이드바에서 확장(Extensions) 아이콘을 클릭합니다.
    - 검색창에 `Code Runner`를 입력하고 `Code Runner` 확장을 설치합니다.

2. **Code Runner 사용법**  
    - 실행하려는 코드 파일을 열고, 파일의 언어가 자동으로 감지되었는지 확인합니다.
    - 코드 실행:  
      - 상단 메뉴에서 `Run Code` 버튼을 클릭하거나,  
      - 단축키 `Ctrl+Alt+N` (Windows/Linux) 또는 `Cmd+Option+N` (Mac)을 사용합니다.
    - 실행 결과는 VS Code 하단의 출력(Output) 창에 표시됩니다.

3. **Code Runner 설정 변경 (선택 사항)**  
    - VS Code 설정 파일(`settings.json`)을 열어 Code Runner의 동작을 사용자 정의할 수 있습니다.  
      예: 출력 창 자동 클리어 설정  
      ```json
      {
         "code-runner.clearPreviousOutput": true
      }
      ```