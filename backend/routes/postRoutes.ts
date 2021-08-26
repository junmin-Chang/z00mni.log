import express from 'express'
import {Post} from '../model/postModel'

const router = express.Router();


// get ALL post
router.get('/', async (req: express.Request, res: express.Response) => {
    const posts = await Post.find();
    res.json(posts)
})

// get one post by id
router.get('/:id', async (req: express.Request, res: express.Response) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
})

// delete one post 
router.delete('/:id', async (req: express.Request, res: express.Response) => {
    await Post.deleteOne({ _id: req.params.id })
})

// update one post
router.patch('/:id', (req: express.Request,res: express.Response) => {
    const {title, tags, html} = req.body;
    Post.findByIdAndUpdate(req.params.id,  {
       title: title,
       tags: tags,
       html: html
   }, {new:true, useFindAndModify: false},(err : any, result : any) => {
       if (err) {
        console.error(err)
       }
       res.json(result)
       console.log(req.body.title)
   })
})

module.exports = router;
