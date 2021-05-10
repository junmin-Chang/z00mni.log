const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Post = require('../model/postModel');

require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 80;
console.log('Server is Starting...');



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})


app.use('/posts', require('./routes/postRoutes'));


app.post('/write', async (req,res) => {
    const { title, createdAt, tags, html } = req.body;

    const newPost = new Post({
        title,
        createdAt,
        tags,
        html
    })

    try {
        const savedPost = await newPost.save();
        res.json(savedPost);
    } catch (err) {
        console.error(err)
    }
})


console.log('Connecting to Mongo db');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err) return console.log(err.message);

    console.log('MongoDB connection established');
})

