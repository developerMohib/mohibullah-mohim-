"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneBlog = exports.getBlogs = void 0;
const blogSchema_1 = __importDefault(require("../model/blogSchema"));
const getBlogs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blogSchema_1.default.find();
        if (!blogs.length) {
            res.status(404).json({
                success: false,
                message: 'No blogs found in the database.',
                data: [],
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'Blogs are retrived successfully',
            data: blogs,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getBlogs = getBlogs;
const getOneBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req === null || req === void 0 ? void 0 : req.params.id;
    try {
        const post = yield blogSchema_1.default.findById(id);
        if (!post) {
            res.status(404).json({ message: 'Post not found' });
            return;
        }
        res.status(200).json({
            success: true,
            data: post,
        });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
        next(err);
    }
});
exports.getOneBlog = getOneBlog;
