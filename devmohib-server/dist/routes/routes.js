"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const sendmailController_1 = require("../controller/sendmailController");
const reviewsController_1 = require("../controller/reviewsController");
const blogsController_1 = require("../controller/blogsController");
const projectController_1 = require("../controller/projectController");
const subscriberController_1 = require("../controller/subscriberController");
const router = express_1.default.Router();
// email sender routes
router.post('/sendMail', sendmailController_1.sendMail);
// reviews routes
router.get('/reviews', reviewsController_1.getReviews);
// blogs routes
router.get('/blogs', blogsController_1.getBlogs);
router.get('/details/:id', blogsController_1.getOneBlog);
// projects routes
router.get('/projects', projectController_1.getProjects);
router.get('/project-details/:id', projectController_1.getOneProject);
router.post('/subscribe', subscriberController_1.subscribe);
exports.routes = router;
