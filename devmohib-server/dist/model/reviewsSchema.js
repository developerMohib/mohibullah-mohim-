"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    quote: String,
    name: String,
    position: String,
    image: String,
}, {
    timestamps: true
});
const Review = (0, mongoose_1.model)('Review', reviewSchema);
exports.default = Review;
