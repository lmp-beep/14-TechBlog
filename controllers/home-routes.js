const router = require('express').Router();
const Post = require('../models/Post');

// route to get all posts
router.get('/', async (req, res) => {
    
    const postData = await Post.findAll().catch((err) => { 
      res.json(err);
    });
    
    const posts = postData.map((post) => post.get({ plain: true }));
  
    res.render('allPosts', { posts });
    });


// get one post
router.get('/post/:id', async (req, res) => {
    
  const postData = await Post.findByPk(req.params.id, {

  });
 
  const post = postData.get({ plain: true });
  res.render('onePost', { post });

  });
  


// signup

// login

// 





module.exports = router;