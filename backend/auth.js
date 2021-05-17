const { User } = require('./model/userModel');


// 인증 처리
let auth = (req, res, next) => {
    // 클라에서 토큰 받기
    let token = req.cookies.x_auth;
    
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