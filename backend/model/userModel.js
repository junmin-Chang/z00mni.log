const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const userSchema = mongoose.Schema({
    name: { type: String, maxlength: 100},
    email: { 
        type: String,
        trim: true,
        unique: 1
    },
    password: { type: String, minlength: 8},
    role: { type: Number, default: 0},
    token: { type: String },
    tokenExp: { type: Number }
})

// register 전 디비에 저장 전에 비밀번호 암호화

userSchema.pre('save', function(next) {
    var user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(saltRounds,  function(err, salt) {
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})
// login시 비밀번호를 암호화 후 디비에 저장된 비밀번호와 비교
userSchema.methods.comparePassword = function(plainPassword, callback) {
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if (err) return callback(err);
        callback(null, isMatch);
    })
}

// login시 토큰 생성
userSchema.methods.generateToken = function(callback) {
    const user = this;
    
    const token = jwt.sign(user._id.toHexString(), '1234', { expiresIn: '7d'});
    user.token = token;
    user.save((err, user) => {
        console.log('user:', user)
        if (err) return callback(err);
        callback(null, user);
    })
}

// 인증시 토큰과 디비의 토큰을 복호화하여 비교
userSchema.statics.findByToken = function(token, callback) {
    var user = this;
    console.log('model token', token)
    jwt.verify(token, '1234', (err, decoded) => {
        console.log('docoded',decoded)
        user.findOne({"_id": user._id, "token": token}, (err, user) => {
            
            callback(null, user);
        })
    })
}
const User = mongoose.model('User', userSchema)
 
module.exports = { User }