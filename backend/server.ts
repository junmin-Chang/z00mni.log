import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import passport from "passport";
const mongoose = require('mongoose')
require('dotenv').config();


const app = express();
app.set('trust proxy', 1);


const PORT = process.env.PORT || 80;
console.log('Server is Starting...');


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
console.log('Connecting to Mongo db');
mongoose.connect(process.env["MONGODB_URI "], {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    }, (err : any) => {
    if (err) return console.log(err.message);

    console.log('MongoDB connection established');
})
app.use(cors({ credentials: true, origin: true}));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);


// authentication routes
app.use("/api/users", require('./routes/api/users'));
// post routes
app.use('/posts', require('./routes/postRoutes'));
// write routes
app.use('/', require('./routes/writeRoutes'))
