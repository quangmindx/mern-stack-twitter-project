const Route = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const {
  getAllPosts,
  createOnePost,
  updateOnePost,
  deleteOnePost,
} = require("../controllers/postController");

Route.route("/").get(getAllPosts).post(verifyToken, createOnePost);
Route.route("/:postId")
  .put(verifyToken, updateOnePost)
  .delete(verifyToken, deleteOnePost);
module.exports = Route;
