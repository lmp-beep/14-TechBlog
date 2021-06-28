const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newComment = await Comment.create({
//       ...req.body,
//       userId: req.session.userId,
//     });
//     res.json(newComment);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/comment/:id', (req, res) => {
//     res.render('post');
//   });





  


router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create(req.body, {
      userId: req.session.userId,
    });
    res.json(newComment.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", withAuth, async (req, res) => {
  try {
    const allComments = await Comment.findAll({});
    res.json(allComments);
  } catch (err) {}
});







// router.post("/", async (req, res) => {
//     console.log(req.session)
//     try {
//       const addComment = await Comment.create({
//         // user_id: req.session.user_id,
//         content: req.body.addComment
//       });
//       res.status(200).json(addComment);
//       console.log(addComment + " router post")
//     } catch (err) {
//       res.status(400).json(err);
      
//     }
//   });


module.exports = router;
