const Post = require("../models/Post");

// Get all posts
const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({}).populate("author");
    res.status(200).json({
      status: "success",
      resutls: posts.length,
      data: { posts },
    });
  } catch (error) {
    res.json(error);
  }
};

// create one post
const createOnePost = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const post = await Post.create({ ...req.body, author: userId });
    res.status(200).json({
      status: "success",
      data: { post },
    });
  } catch (error) {
    res.json(error);
  }
};

// update one post
const updateOnePost = async (req, res, next) => {
  try {
    // const { userId } = req.user;
    const { postId } = req.params;
    const post = await Post.findByIdAndUpdate(
      postId,
      { ...req.body },
      { new: true, runValidator: true }
    );
    res.status(200).json({
      status: "success",
      data: { post },
    });
  } catch (error) {
    res.json(error);
  }
};

// delete one post
const deleteOnePost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    await Post.findByIdAndDelete(postId);
    res.status(200).json({
      status: "success",
      message: "Post has been deleted",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getAllPosts,
  createOnePost,
  updateOnePost,
  deleteOnePost,
};
