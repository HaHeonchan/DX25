const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 정적 파일(HTML, CSS, JS)을 제공하는 미들웨어입니다.
// 프로젝트의 루트 디렉토리를 기준으로 파일을 제공하며,
// 웹 브라우저가 '/' 경로를 요청하면 자동으로 'index.html'을 찾아 보여줍니다.
app.use(express.static(path.join(__dirname)));

// 서버 시작
app.listen(PORT, () => {
  console.log(`server : http://localhost:${PORT}`);
});