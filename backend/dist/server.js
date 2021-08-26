"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var passport_1 = __importDefault(require("passport"));
var mongoose = require('mongoose');
require('dotenv').config();
var app = express_1.default();
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
app.use(cors_1.default({ credentials: true, origin: true }));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(passport_1.default.initialize());
require("./config/passport")(passport_1.default);
// authentication routes
app.use("/api/users", require('./routes/api/users'));
// post routes
app.use('/posts', require('./routes/postRoutes'));
// write routes
app.use('/', require('./routes/writeRoutes'));
//# sourceMappingURL=server.js.map