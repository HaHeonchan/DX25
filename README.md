# DX25

## 🚀 시작하기 (Getting Started)

프로젝트를 로컬 환경에 설정하고 실행하는 방법입니다.

### 사전 준비 (Prerequisites)

개발을 시작하기 전에 다음 도구들이 설치되어 있어야 합니다.

*   [Node.js](https://nodejs.org/) (v18.x 이상)
*   [npm](https://www.npmjs.com/) (Node.js 설치 시 함께 설치)
*   (선택) [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### 설치 (Installation)

1.  Git 저장소를 복제합니다.
    ```sh
    git clone https://github.com/HaHeonchan/DX25.git
    ```
2.  프로젝트 디렉토리로 이동합니다.
    ```sh
    cd DX25
    ```
3.  프로젝트에 필요한 의존성 패키지들을 설치합니다.
    ```sh
    npm install
    ```

## 📜 현재 사용 가능한 스크립트 (Available Scripts)

프로젝트 루트 디렉토리에서 다음 스크립트들을 실행할 수 있습니다.

### `npm run dev`

**개발 모드(nodemon)**로 서버를 실행합니다. nodemon을 사용하여 파일이 변경될 때마다 서버가 자동으로 재시작되므로 개발에 편리합니다.

### `npm run start`

프로덕션 모드로 서버를 간단히 실행합니다. `node index.js` 명령을 직접 실행하는 것과 같습니다.

### `npm run start:prod`

**실제 서버에 배포할 때 사용하는 스크립트입니다.** PM2를 사용하여 애플리케이션을 실행합니다. PM2는 프로세스가 예기치 않게 종료되었을 때 자동으로 재시작해주고, 클러스터링을 통해 성능을 극대화하는 등 안정적인 서버 운영을 도와줍니다.

### `npm run stop:prod`

PM2로 실행된 프로덕션 서버를 중지합니다.

## 🌳 브랜치 전략 및 협업 규칙 (Branching Strategy & Workflow)

우리 팀은 **Feature Branch Workflow**를 따릅니다. 모든 기능 개발 및 버그 수정은 별도의 브랜치에서 진행한 후, 코드 리뷰를 거쳐 메인 개발 브랜치에 병합합니다.

### 주요 브랜치 (Main Branches)

*   `main`: **제품으로 출시 가능한** 가장 안정적인 버전의 코드를 관리하는 브랜치입니다.
*   `dev`: 기능 개발과 버그 수정이 완료된 코드를 통합하기 위한 **메인 개발 브랜치**입니다. 다음 릴리스를 준비하는 곳입니다.

### 브랜치 이름 규칙 (Branch Naming Convention)

새로운 브랜치를 생성할 때는 다음 규칙에 따라 이름을 지정합니다.

*   **기능 (Feature)**: `feat/short-description` (e.g., `feat/login-api`)
*   **버그 수정 (Bug Fix)**: `fix/short-description` (e.g., `fix/header-css-bug`)
*   **문서 (Docs)**: `docs/short-description` (e.g., `docs/update-readme`)
*   **리팩토링 (Refactor)**: `refactor/short-description` (e.g., `refactor/user-model`)

### 개발 워크플로우 (Development Workflow)

1.  **브랜치 생성 (Create a Branch)**
    -   항상 최신 `dev` 브랜치에서 시작합니다.
    ```sh
    # 1. dev 브랜치로 이동
    git checkout dev

    # 2. 최신 코드를 받아옵니다.
    git pull origin dev

    # 3. 새로운 기능 브랜치를 생성합니다.
    git checkout -b feat/my-new-feature
    ```

2.  **개발 및 커밋 (Develop & Commit)**
    -   기능을 개발하고, 의미 있는 단위로 자주 커밋합니다. 커밋 메시지는 다른 팀원이 이해하기 쉽게 작성합니다.
    ```sh
    git add .
    git commit -m "feat: 로그인 기능 추가"
    ```

3.  **푸시 (Push)**
    -   개발이 완료되면 원격 저장소에 브랜치를 푸시합니다.
    ```sh
    git push origin feat/my-new-feature
    ```

4.  **풀 리퀘스트 (Pull Request)**
    -   GitHub에서 `feat/my-new-feature` 브랜치를 `dev` 브랜치로 향하는 **풀 리퀘스트(PR)**를 생성합니다.
    -   PR 제목과 설명은 다른 팀원이 변경 사항을 이해할 수 있도록 명확하게 작성합니다.

5.  **코드 리뷰 및 병합 (Code Review & Merge)**
    -   최소 한 명 이상의 팀원에게 코드 리뷰를 요청합니다.
    -   리뷰가 완료되고 승인(Approve)되면, PR을 `dev` 브랜치에 병합(Merge)합니다.
    -   **주의:** `main` 브랜치에는 절대로 직접 푸시하지 않습니다.

6.  **브랜치 삭제 (Delete Branch)**
    -   병합이 완료된 기능 브랜치는 원격 저장소에서 삭제하여 깔끔하게 관리합니다.