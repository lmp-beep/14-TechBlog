const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const withAuth = require('../utils/auth');

// route to get all posts
router.get('/', async (req, res) => {
    
  const postData = await Post.findAll().catch((err) => { 
    res.json(err);
  });
  
  const posts = postData.map((post) => post.get({ plain: true }));

  res.render('allPosts', { posts });
  });


// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });



// route to get one post
router.get("/post/:id", async (req, res) => {
  const postData = await Post.findByPk(req.params.id, {
    
  });

  const post = postData.get({ plain: true });
  res.render("onePost", { post });
});



// route to signup
router.get('/signup', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('signup');
});

// route to login
router.get('/login', (req, res) => {
  // try {
  //       const userData = await User.findAll({
  //         attributes: { exclude: ['password'] },
  //         order: [['name', 'ASC']],
  //       });
    
  //       const users = userData.map((project) => project.get({ plain: true }));
    
  //       res.render('homepage', {
  //         users,
  //         logged_in: req.session.logged_in,
  //       });
  //     } catch (err) {
  //       res.status(500).json(err);
  //     }

  res.render('login');
});



module.exports = router;
