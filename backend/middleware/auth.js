const { User } = require('../model/userModel');


// 인증 처리
const auth = (req, res, next) => {
    // 클라에서 토큰 받기

    let token =  req.headers.cookie.split('x_auth=')[1];
        
    // token 복호화 , 유저 찾기
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true});
        req.token = token;
        req.user = user;
        next();
    })
}

module.exports = { auth };