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
const router = express_1.default.Router();
// email sender routes
router.post('/sendMail', sendmailController_1.sendMail);
// reviews routes
router.get('/reviews', reviewsController_1.getReviews);
// blogs routes
router.get('/blogs', blogsController_1.getBlogs);
exports.routes = router;
