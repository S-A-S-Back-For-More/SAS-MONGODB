const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const postSchema = new mongoose.Schema({
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

   //export to controllers!!!
module.exports = mongoose.model('Post', postSchema);