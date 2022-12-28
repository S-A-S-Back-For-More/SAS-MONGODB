const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const PostSchema = new mongoose.Schema({
    location: {
        type:String,
        required: true,
    },
    description: {
        type:String,
        required: true,
    },
    image: {
        type:String,
        required: true,
    }
})

const UserPost = mongoose.model('User-Posts',PostSchema);    
module.exports = UserPost;