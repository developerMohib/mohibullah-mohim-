"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const sendmail_1 = require("../controller/sendmail");
const router = express_1.default.Router();
router.post('/sendMail', sendmail_1.sendMail);
exports.routes = router;
