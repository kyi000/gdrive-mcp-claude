const express = require('express');
const router = express.Router();
const { getAuthUrl, saveToken } = require('../../lib/googleAuthHelper');

// Google 인증 URL 가져오기
router.get('/url', (req, res) => {
  try {
    const authUrl = getAuthUrl();
    res.json({ url: authUrl });
  } catch (error) {
    console.error('인증 URL 생성 오류:', error);
    res.status(500).json({ message: '인증 URL을 생성하는데 실패했습니다.' });
  }
});

// Google 인증 콜백 처리
router.get('/callback', async (req, res) => {
  const { code } = req.query;
  
  if (!code) {
    return res.status(400).json({ message: '인증 코드가 필요합니다.' });
  }
  
  try {
    await saveToken(code);
    // 인증 성공 페이지로 리디렉션
    res.redirect('/auth/success');
  } catch (error) {
    console.error('토큰 저장 오류:', error);
    res.status(500).json({ message: '토큰 저장중 오류가 발생했습니다.' });
  }
});

module.exports = router;
