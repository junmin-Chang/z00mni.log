const express = require('express');
const {User} = require('../model/userModel')
const router = express.Router();
const { auth } = require('../auth')
//register
router.post('/register', (req,res) => {
    const user = new User(req.body);

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true })
    })
})

// login
router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: '요청된 이메일에 해당하는 유저가 없습니다.'
            })
        }
        // 비밀번호가 맞는지 확인 후
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) 
                return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다"});
                // 생성된 토큰을 쿠키에 저장
                user.generateToken((err, user) => {
                    if (err) return res.status(400).send(err);
                    res.cookie("x_auth", user.token)
                        .status(200)
                        .json({ loginSuccess: true, useId: user._id});
                })
        })
    })
})

//인증
    router.get('/auth', auth, (req,res) => {
        res.status(200).json({
            _id: req.user._id,
            isAdmin: req.user.role === 0 ? false: true,
            isAuth: true,
            email: req.user.email,
            name: req.user.name,
            role: req.user.role


        })
    })

    

module.exports = router;