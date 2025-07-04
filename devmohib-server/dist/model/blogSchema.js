"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AuthorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
});
const BlogPostSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    author: {
        type: AuthorSchema,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
const BlogPost = (0, mongoose_1.model)('Blog', BlogPostSchema);
exports.default = BlogPost;
