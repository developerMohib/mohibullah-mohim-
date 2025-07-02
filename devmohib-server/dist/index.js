"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const globalErrorHander_1 = require("./middlewares/globalErrorHander");
const routes_1 = require("./routes/routes");
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({ origin: process.env.ALLOWED_ORIGIN || '*' }));
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Routes
app.use('/api', routes_1.routes);
app.get('/', (req, res) => {
    res.send('🚀 personal web server is running');
});
app.get('/health', (req, res) => {
    res.send('🚀 Server is healthy');
});
// Catch-all route for unknown routes (must be defined last)
app.all(/.*/, (req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.method} ${req.originalUrl} not found`,
        data: null,
    });
});
app.use(globalErrorHander_1.errorHandler);
exports.default = app;
