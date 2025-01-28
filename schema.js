const mongoose = require("mongoose")

const commentsSchema = new mongoose.Schema({
    comments: {
        Username:{
            type: String,
        },
        Message: {
            type: String,
            required: true,
        },
        CommentedAt: {
            type: Date,
            default: ()=> Date.now,
        },
    },
})

const blogPosts = new mongoose.Schema({
    blogPosts: {
        Title: {
            type: String,
            unique: true,
            minlength: 5,
        },
        Content: {
            type: String,
            required: true,
            minlength: 50,
        },
        Author: {
            type: String,
        },
        Tags: {
            type: [String],
        },
        Category: {
            type: String,
            default: "General",
        },
        Likes: {
            Type: [String],
        },
        CreatedAt: {
            type: Date,
            default: ()=> Date.now(),
        },
        UpdatedAt: {
            type: String,
        },
        comments: [commentsSchema]
    },
    
})

module.exports = mongoose.model("blogPosts", blogPosts);