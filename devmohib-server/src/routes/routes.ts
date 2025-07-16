import express from 'express';
import { sendMail } from '../controller/sendmailController';
import { getReviews } from '../controller/reviewsController';
import { getBlogs, getOneBlog } from '../controller/blogsController';
import { getOneProject, getProjects } from '../controller/projectController';
import { subscribe,allSubscriber } from '../controller/subscriberController';
const router = express.Router();
// email sender routes
router.post('/sendMail', sendMail);

// reviews routes
router.get('/reviews', getReviews);

// blogs routes
router.get('/blogs', getBlogs);
router.get('/details/:id', getOneBlog);

// projects routes
router.get('/projects', getProjects);
router.get('/project-details/:id', getOneProject);

router.post('/subscribe',subscribe)
router.get('/subscriber',allSubscriber)

export const routes = router;
