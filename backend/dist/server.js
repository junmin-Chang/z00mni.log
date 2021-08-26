"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require("passport");
var users = require("./routes/api/users");
require('dotenv').config();
var app = express();
app.set('trust proxy', 1);
var PORT = process.env.PORT || 80;
console.log('Server is Starting...');
app.listen(PORT, function () {
    console.log("Server is running on PORT " + PORT);
});
console.log('Connecting to Mongo db');
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, function (err) {
    if (err)
        return console.log(err.message);
    console.log('MongoDB connection established');
});
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);
// authentication routes
app.use("/api/users", users);
// post routes
app.use('/posts', require('./routes/postRoutes'));
// write routes
app.use('/', require('./routes/writeRoutes'));
//# sourceMappingURL=server.js.map