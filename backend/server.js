const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

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
app.use(cors());
app.use(cookieParser())


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/posts', require('./routes/postRoutes'));
app.use('/', require('./routes/writeRoutes'))
app.use('/', require('./routes/userRoutes'));





