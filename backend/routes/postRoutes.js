
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
router.patch('/:id', async (req,res) => {
    
    try {
        const post = req.body;
        const id = req.params;
        const updatedPost = Post.findByIdAndUpdate(id, post, { new: true }, function (err) {
            if (err) {
                throw err;
            }
            res.json(updatedPost)
        })
       
    } catch(e) {
        console.log(e)
    }
})

module.exports = router;
