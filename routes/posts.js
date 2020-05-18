const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// get all posts
router.get("/", async (req, res) => {
    try{
        const getAllPost = await Post.find();
        res.json(getAllPost);
    } catch(err) {
        res.json({message: err});
    }
});

// get specific post
router.get("/:postId", async (req, res) => {
    try{
        const getPost = await Post.findById(req.params.postId);
        res.send(getPost);
    } catch(err) {
        res.json({message: err});
    }
});

// create a new post
router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const createPost = await post.save()
        res.json(createPost);
    } catch(err) {
        res.json({message: err});
    }
});

// delete a post
router.delete("/:postId", async (req, res) => {
    try{
        const deletePost = await Post.deleteOne({_id: req.params.postId});
        res.json(deletePost);
    } catch(err) {
        res.json({message: err});
    }
});

// edit a post
router.patch("/:postId", async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: {
                title: req.body.title,
                description: req.body.description
            }}
        );
        res.json(updatePost);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;