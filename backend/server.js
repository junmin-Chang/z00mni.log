const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 80;
console.log('Server is Starting...');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../blog_frontend/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, '../blog_frontend', 'build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})


app.use('/posts', require('./routes/postRoutes'));
app.get('/', (req,res) => {
    res.send('sibal')
})



console.log('Connecting to Mongo db');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err) return console.log(err.message);

    console.log('MongoDB connection established');
})

