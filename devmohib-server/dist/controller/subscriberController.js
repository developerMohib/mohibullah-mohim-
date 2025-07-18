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
exports.deleteSubscriber = exports.allSubscriber = exports.subscribe = void 0;
const subscriberSchema_1 = __importDefault(require("../model/subscriberSchema"));
const subscribe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        console.log(' email', email);
        if (!email) {
            res.status(404).json({
                success: false,
                message: 'Email not found',
            });
            return;
        }
        // Check if subscriber already exists
        const existingSubscriber = yield subscriberSchema_1.default.findOne({ email });
        if (existingSubscriber) {
            res.status(409).json({
                success: false,
                message: 'This email is already subscribed',
            });
            return;
        }
        // Create new subscriber
        const newSubscriber = new subscriberSchema_1.default({ email });
        yield newSubscriber.save();
        // Need to send confirmation email on subscriber email
        res.status(201).json({
            success: true,
            message: 'Thank you for subscribing!',
            data: newSubscriber,
        });
    }
    catch (error) {
        console.error('Subscription error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to process subscription',
        });
        next(error);
    }
});
exports.subscribe = subscribe;
const allSubscriber = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield subscriberSchema_1.default.find();
        res.status(200).json({
            success: true,
            message: 'All subscriber retrived successfully',
            data: result,
        });
    }
    catch (error) {
        console.error('Subscription Find error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to process subscription',
        });
        next(error);
    }
});
exports.allSubscriber = allSubscriber;
const deleteSubscriber = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const result = yield subscriberSchema_1.default.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            res
                .status(404)
                .json({ error: 'No subscriber found with this email' });
            return;
        }
        res
            .status(200)
            .json({ success: true, message: 'Subscriber deleted successfully' });
    }
    catch (error) {
        console.error('Failled to delete this one:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete subscription',
        });
        next(error);
    }
});
exports.deleteSubscriber = deleteSubscriber;
