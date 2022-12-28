
//@description  get post
//@route        GET/api/posts
//@access       private(after added authentication)
const getPosts = (req,res) => {
    res.json({message: 'get request'})
}

//@description  create post
//@route        POST/api/posts
//@access       private(after added authentication)
const createPost = (req,res) => {
    res.json({message: 'create request'})
}

//@description  update post
//@route        PUT/api/posts/:id
//@access       private(after added authentication)
const updatePost = (req,res) => {
    res.json({message: `update request ${req.params.id}`})
}


//@description  delete post
//@route        DELETE/api/posts/:id
//@access       private(after added authentication)
const deletePost = (req,res) => {
    res.json({message: `delete request${req.params.id}`})
}
//export the function to be used in routes
module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost

}