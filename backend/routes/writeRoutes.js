const express = require('express');
const Post = require('../model/postModel');
const router = express.Router();

router.post('/write', async (req,res) => {
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
