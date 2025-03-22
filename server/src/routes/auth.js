const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { authenticateToken } = require('../middleware/auth');
const googleAuthRouter = require('./auth/google');

// Google 인증 관련 라우트 적용
router.use('/google', googleAuthRouter);

// 로그인 라우트
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // 데모 목적으로 하드코딩된 사용자 (실제로는 DB에서 가져와야 함)
    // 실제 사용 시에는 환경 변수나 데이터베이스에서 관리해야 합니다
    const validUser = {
      username: process.env.APP_USERNAME || 'admin',
      password: process.env.APP_PASSWORD || 'password123',
      name: '사용자'
    };
    
    // 사용자 확인
    if (username !== validUser.username) {
      return res.status(401).json({ message: '사용자 정보가 일치하지 않습니다' });
    }
    
    // 비밀번호 확인 (실제로는 bcrypt로 해시 비교 필요)
    const isMatch = password === validUser.password;
    if (!isMatch) {
      return res.status(401).json({ message: '비밀번호가 일치하지 않습니다' });
    }
    
    // JWT 토큰 생성
    const token = jwt.sign(
      { id: '1', username: validUser.username, name: validUser.name },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );
    
    res.json({
      token,
      user: {
        id: '1',
        username: validUser.username,
        name: validUser.name
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: '서버 오류가 발생했습니다' });
  }
});

// 사용자 프로필 가져오기
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    // 인증 미들웨어에서 설정한 사용자 정보 반환
    res.json(req.user);
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ message: '서버 오류가 발생했습니다' });
  }
});

module.exports = router;
