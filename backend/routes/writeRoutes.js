const express = require('express');
const Post = require('../model/postModel');
const router = express.Router();

router.post('/write', async (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
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

module.exports = router;
