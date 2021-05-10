const express = require('express');
const { Mongoose } = require('mongoose');
const Post = require('../model/postModel');
const router = express.Router();

// send post and save it
router.post('/write', async (req, res) => {
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
// get ALL post
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.json(posts)
})

// get one post by id
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
})

// delete one post 
router.delete('/:id', async (req, res) => {
    await Post.deleteOne({ _id: req.params.id })



})

module.exports = router;
