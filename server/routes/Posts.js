const express = require('express');
const router = express.Router();
//import controller from controllers folder to be able to use the logic defined there
const{getPosts,createPost,updatePost,deletePost} = require("../controllers/postController")

// *********NOTE: FOR ADDING FUNCTIONALITY TO EACH ROUTER, BEST PRACTICE IS TO CREATE A CONTROLLER FOR EACH ROUTER!!!!!!!!!!!!!**************************

//GET REQUEST
router.get('/', getPosts)


//POST REQUEST(create)
router.post('/', createPost)


//PUT REQUEST(UPDATE)
router.put('/:id', updatePost)


//DELETE REQUEST(DELETE)
router.delete('/:id', deletePost)
module.exports = router;