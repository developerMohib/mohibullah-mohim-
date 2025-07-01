"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        success: false,
        message: (err === null || err === void 0 ? void 0 : err.message) || 'Something went wrong'
    });
};
exports.errorHandler = errorHandler;
