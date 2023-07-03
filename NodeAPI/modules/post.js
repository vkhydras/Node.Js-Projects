const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    titel:{
        type:String,
        required:"titelis required",
        minlength:4,
        maxlength:150
    },
    body:{
        type:String,
        required:"Body is required",
        minlength:4,
        maxlength:100
    }
})

module.exports=mongoose.model("Post",postSchema)