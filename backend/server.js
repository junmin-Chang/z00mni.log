const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { User } = require('./model/userModel');
require('dotenv').config();


const app = express();
app.set('trust proxy', 1);


const PORT = process.env.PORT || 80;
console.log('Server is Starting...');


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
console.log('Connecting to Mongo db');
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    }, (err) => {
    if (err) return console.log(err.message);

    console.log('MongoDB connection established');
})
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/posts', require('./routes/postRoutes'));
app.use('/', require('./routes/writeRoutes'))

// auth
app.get('/auth', (req,res) => {
    // let cookie = req.cookies['x_auth'];
    // console.log("auth cookie", cookie);
    if (localStorage.getItem("token")) {
      const userToken = JSON.parse(localStorage.getItem("token")).token;
      if (userToken === req.user.token) {
        res.status(200).json({
            _id: req.user._id,
            isAdmin: req.user.role === 0 ? true : false,
            isAuth: true,
            email: req.user.email,
            name: req.user.name,
            role: req.user.role
        })
      }
    }
    
})


//register
app.post('/register', (req,res) => {

    const user = new User(req.body);
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true });
    })
})

//login
app.post('/login', (req,res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: '요청된 이메일에 해당하는 유저가 없음.'
            })
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) 
                return res.json({ loginSuccess: false , message: '비밀번호가 다름.'})
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                // console.log("로그인 시 토큰:", user.token)
            //     res.cookie("x_auth", user.token, { httpOnly: true, path: '/', domain: 'https://z00mni-log.netlify.app/', secure: true,
            // sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax', maxAge: 86400 * 1000 })
                    localStorage.setItem("token", JSON.stringify({
                        token: user.token
                    }))
                    .status(200)
                    .json({ loginSuccess: true, useId: user._id})
                    // console.log(req.session)
            })
        })
    })
})



