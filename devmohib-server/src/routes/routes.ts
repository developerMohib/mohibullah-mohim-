import express from 'express';
import { sendMail } from '../controller/sendmailController';
import { getReviews } from '../controller/reviewsController';
import { getBlogs } from '../controller/blogsController';
const router = express.Router();
// email sender routes
router.post('/sendMail', sendMail);

// reviews routes
router.get('/reviews', getReviews);

// blogs routes
router.get('/blogs', getBlogs);
export const routes = router;
