# Google Drive MCP & Claude AI 통합 시스템

이 프로젝트는 Google Drive를 MCP(Media Control Protocol) 서버로 활용하여 PDF 및 DOC 파일을 Claude AI와 연동하여 논문이나 보고서를 인용하고 분석하는 웹 애플리케이션입니다.

## 주요 기능

- 간단한 로그인 (ID/비밀번호) 인증 시스템
- Google Drive 파일 접근 및 관리
- PDF 및 DOC 파일 내용 추출 및 처리
- Claude AI API 연동을 통한 문서 분석 및 인용
- 사용자 친화적인 웹 인터페이스

## 기술 스택

- **프론트엔드**: React.js
- **백엔드**: Node.js (Express)
- **인증**: JWT (JSON Web Tokens)
- **파일 처리**: pdf.js (PDF), mammoth.js (DOC)
- **API 연동**: Google Drive API, Claude AI API

## 설치 및 실행 방법

### 필수 요구사항
- Node.js 18.x 이상
- npm 또는 yarn
- Google Cloud Platform 계정 및 API 키
- Claude AI API 키

### 설치 방법

1. 저장소 클론하기
```bash
git clone https://github.com/kyi000/gdrive-mcp-claude.git
cd gdrive-mcp-claude
```

2. 의존성 설치
```bash
# 루트 디렉토리에서
npm install

# 클라이언트 디렉토리에서
cd client
npm install

# 서버 디렉토리에서
cd ../server
npm install
```

3. 환경 변수 설정
- `.env.example` 파일을 복사하여 `.env` 파일 생성
- Google Drive API 키, Claude AI API 키 등 필요한 정보 입력

4. 애플리케이션 실행
```bash
# 개발 모드로 실행 (루트 디렉토리에서)
npm run dev
```

## 사용 방법

1. 웹 브라우저에서 애플리케이션 접속 (기본: http://localhost:3000)
2. 로그인 ID와 비밀번호로 로그인
3. Google Drive 계정 인증
4. 파일 탐색기에서 PDF 또는 DOC 파일 선택
5. 파일 내용 분석 또는 Claude AI를 통한 인용 작업 수행

## 라이선스

MIT