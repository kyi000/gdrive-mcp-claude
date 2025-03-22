require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

// 라우트 가져오기
const apiRoutes = require('./routes');

// Express 앱 초기화
const app = express();

// 미들웨어 설정
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// API 라우트 설정
app.use('/api', apiRoutes);

// 인증 성공 페이지 서빙
app.get('/auth/success', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/public/auth/success.html'));
});

// 프로덕션 환경에서는 React 앱 서빙
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
  });
}

// 서버 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다`);
});
