const Post = require('../modules/post');

exports.getPost = (req, res) => {
  const post = Post.find()
  .then((posts)=>{
    res.status(200).json({posts:posts})
  })
  .catch(err=>console.log(err))
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  // console.log("creating post:", post);
//   post.save()
//     .then(result => {
//       res.status(200).json({
//         post: result
//       });
//     })
//     .catch(err => {
//       res.status(400).json({
//         error: err
//       });
//     });
post.save()
.then(resuls=>{
    res.status(200).json({
        post : result
    })
})
};
