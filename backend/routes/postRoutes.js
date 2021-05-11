
const express = require('express');
const Post = require('../model/postModel');
const router = express.Router();


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

// update one post
router.put('/:id', async (req,res) => {
   
    Post.findById(req.params.id, (err, post) => {
        if (err) return res.status(500).json({ error: 'database failure!' });
        if (!post) return res.status(404).json({ error: 'post not exist!' });

        if (req.body.title) console.log(req.body.title);
        if (req.body.tags) console.log(req.body.tags);
        if (req.body.html) console.log(req.body.html);

        post.save((err) => {
            if (err) res.status(500).json({ error: 'failed to update!' });
            res.json(post);
        })
    })
})

module.exports = router;
