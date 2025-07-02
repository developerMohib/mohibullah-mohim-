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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const sendMailer_1 = require("../utils/sendMailer");
const sendMail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userData } = req.body;
    const { name, email, message } = userData;
    try {
        if (!name || !email) {
            res.status(400).json({
                success: false,
                message: 'Missing required fields',
            });
            return;
        }
        yield (0, sendMailer_1.sendContactEmails)({ name, email, message });
        res
            .status(200)
            .json({ success: true, message: 'Emails sent successfully.' });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to send emails.' });
        next(error);
    }
});
exports.sendMail = sendMail;
