const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 80;
console.log('Server is Starting...');



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://z00mni-log.netlify.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/posts', require('./routes/postRoutes'));
app.use('/', require('./routes/writeRoutes'))





console.log('Connecting to Mongo db');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err) return console.log(err.message);

    console.log('MongoDB connection established');
})

