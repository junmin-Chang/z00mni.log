const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());
function setupCORS(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-type,Accept,X-Access-Token,X-Key');
    res.header('Access-Control-Allow-Origin', '*');
    if (req.method === 'PATCH') {
        res.status(200).end();
    } else {
        next();
    }
}
app.all('/*', setupCORS);

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

