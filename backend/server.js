const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
app.use(cors({origin:'https://z00mni-log.netlify.app'}));
app.use(express.json());

const PORT = process.env.PORT || 80;
console.log('Server is Starting...');



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

app.use('/posts', require('./routes/postRoutes'));
app.use('/', require('./routes/writeRoutes'))





console.log('Connecting to Mongo db');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err) return console.log(err.message);

    console.log('MongoDB connection established');
})

