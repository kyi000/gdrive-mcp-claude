const express = require('express');
const router = express.Router();

// 모든 라우트 모듈 가져오기
const authRoutes = require('./auth');
const driveRoutes = require('./drive');
const claudeRoutes = require('./claude');

// API 라우트 설정
router.use('/auth', authRoutes);
router.use('/drive', driveRoutes);
router.use('/claude', claudeRoutes);

// 루트 라우트
router.get('/', (req, res) => {
  res.json({ message: 'Google Drive MCP & Claude AI API에 오신 것을 환영합니다.' });
});

module.exports = router;
