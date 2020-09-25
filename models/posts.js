const {Schema , model } = require('mongoose');

const postsSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})


const posts = model('posts' , postsSchema);

module.export = posts;