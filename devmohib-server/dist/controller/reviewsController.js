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
exports.getReviews = void 0;
const reviewsSchema_1 = __importDefault(require("../model/reviewsSchema"));
const getReviews = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield reviewsSchema_1.default.find();
        if (!reviews.length) {
            res.status(404).json({
                success: false,
                message: 'No reviews found in the database.',
                data: [],
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'Reviews are retrived successfully',
            data: reviews,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getReviews = getReviews;
