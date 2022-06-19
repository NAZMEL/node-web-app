const express = require("express");
const {
  getPost,
  deletePost,
  editPost,
  getPosts,
  addPost,
} = require("../controllers/api-post-controller");

const router = express.Router();

// GET ALL POSTS
router.get("/api/posts", getPosts);

// REST API
router.post("/api/post", addPost);
router.get("/api/post/:id", getPost);
router.delete("/api/post/:id", deletePost);
router.put("/api/post/:id", editPost);

module.exports = router;
