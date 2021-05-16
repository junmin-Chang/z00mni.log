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
    role: { type: String, default: 0},
    token: { type: String },
    tokenExp: { type: Number }
})

// register 전 디비에 저장 전에 비밀번호 암호화

userSchema.pre('save', function(next) {
    let user = this;
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
    let user = this;
    let token = jwt.sign(user._id.toHexString(), 'secretToken');
    user.token = token;
    user.save(function(err, user) {
        if (err) return callback(err);
        callback(null, user);
    })
}
const User = mongoose.model('User', userSchema)

module.exports = { User }