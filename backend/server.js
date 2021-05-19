const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { User } = require('./model/userModel');
const { auth } = require('./middleware/auth');
require('dotenv').config();


const app = express();

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
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser())


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/posts', require('./routes/postRoutes'));
app.use('/', require('./routes/writeRoutes'))

// auth
app.get('/auth', auth, (req,res) => {
    console.log(res);
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? true : false,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role
    })
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
                console.log("로그인 시 토큰:", user.token)
                res.cookie("x_auth", user.token, { httpOnly: false, domain:'https://z00mni-log.netlify.app/' })
                    .status(200)
                    .json({ loginSuccess: true, useId: user._id})
                    console.log(req.cookies.x_auth);
            })
        })
    })
})



