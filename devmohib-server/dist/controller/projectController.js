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
exports.getOneProject = exports.getProjects = void 0;
const projectsSchema_1 = __importDefault(require("../model/projectsSchema"));
const getProjects = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield projectsSchema_1.default.find();
        if (!projects.length) {
            res.status(404).json({
                success: false,
                message: 'No projects found in the database.',
                data: [],
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'Project are retrived successfully',
            data: projects,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getProjects = getProjects;
const getOneProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req === null || req === void 0 ? void 0 : req.params.id;
    try {
        const project = yield projectsSchema_1.default.findById(id);
        if (!project) {
            res.status(404).json({ message: 'Project not found' });
            return;
        }
        res.status(200).json({
            success: true,
            data: project,
        });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
        next(err);
    }
});
exports.getOneProject = getOneProject;
