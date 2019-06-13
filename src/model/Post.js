const mon = require('mongoose');

const PostSchema = new mon.Schema({
    author: String,
    place: String,
    description : String,
    hashtags: String,
    image: String,
    likes :{
        type:Number,
        default:0,
    }
},{
    timestamps:true,
});

module.exports = mon.model('Post', PostSchema);