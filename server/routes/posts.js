import express from "express";
import { 
  getPosts, 
  getPost,
  getPostsBySearch,
  createPost, 
  updatePost,
  deletePost,
  likePost,
  commentPost
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getPosts);
router.get('/search', getPostsBySearch);
router.get('/:id', getPost);

router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/like-post', auth, likePost);
router.post('/:id/comment-post', auth, commentPost);

export default router;