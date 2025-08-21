import express from 'express';
import { sendMail } from '../controller/sendmailController';
import { getReviews } from '../controller/reviewsController';
import { getBlogs, getOneBlog, updateOneBlog } from '../controller/blogsController';
import { getOneProject, getProjects } from '../controller/projectController';
import { subscribe,allSubscriber, deleteSubscriber } from '../controller/subscriberController';
const router = express.Router();
// email sender routes
router.post('/sendMail', sendMail);

// reviews routes
router.get('/reviews', getReviews);

// blogs routes
router.get('/blogs', getBlogs);
router.get('/details/:id', getOneBlog);
router.patch('/edit-blog/:id',updateOneBlog);

// projects routes
router.get('/projects', getProjects);
router.get('/project-details/:id', getOneProject);

router.post('/subscribe',subscribe)
router.get('/subscriber',allSubscriber)
router.delete('/delete-subscriber',deleteSubscriber)

export const routes = router;
