
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
router.patch('/:id', (req,res) => {
    const {title, tags, html} = req.body;
    Post.findByIdAndUpdate(req.params.id,  {
       title: title,
       tags: tags,
       html: html
   }, {new:true, useFindAndModify: false},(err, result) => {
       if (err) {
        console.error(err)
       }
       res.json(result)
       console.log(req.body.title)
   })
})

module.exports = router;
