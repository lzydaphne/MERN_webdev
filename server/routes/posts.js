import express from 'express';

// named import
import { getPosts, getPostsBySearch, getPostsByCreator, getPost, createPost, updatePost, likePost, commentPost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/creator', getPostsByCreator);
router.get('/search', getPostsBySearch);
/* handle requests to the root of the application
The getPosts function is the handler function that will be called when a GET request is made to this endpoint. Presumably, getPosts is a function that retrieves a list of posts (or other data) and sends it back to the client in the response.
也就是說，這是當 客戶端向你的root送出GET的請求時，你會call "getPosts"這個function
*/
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', commentPost);

export default router;