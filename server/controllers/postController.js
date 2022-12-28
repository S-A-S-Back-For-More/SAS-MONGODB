//=========when dealing with db =>deal with promises(use async/await), and have to use TRY/CATCH for err handling,
//but instead can use a package(express-async-handler) to handle the error handling
//SYNTAX: wrap the async with asyncHandler() ====================
// ==============================================================================
// -==========================================================================
const asyncHandler = require('express-async-handler');
//@description  get post
//@route        GET/api/posts
//@access       private(after added authentication)
const getPosts = asyncHandler(async (req,res) => {
    res.json({message: 'get request'})
})

//@description  create post
//@route        POST/api/posts
//@access       private(after added authentication)
const createPost = asyncHandler(async (req,res) => {
    //=====err handling======
    if(!req.body.text) {
        //bad request err(if user add a post which is not a text)
        res.status(400)
        //express err handler//will create err difficult to read->so.. create foolder(middleware) in server folder for custom error handling that exe during req / res cycle
        throw new Error('Bad request! Please add a text field to your post')
    }
    res.json({message: 'create request'})
})

//@description  update post
//@route        PUT/api/posts/:id
//@access       private(after added authentication)
const updatePost = asyncHandler(async(req,res) => {
    res.json({message: `update request ${req.params.id}`})
})


//@description  delete post
//@route        DELETE/api/posts/:id
//@access       private(after added authentication)
const deletePost = asyncHandler(async (req,res) => {
    res.json({message: `delete request${req.params.id}`})
})
//export the function to be used in routes
module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost

}