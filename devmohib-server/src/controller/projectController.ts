import { NextFunction, Request, Response } from 'express';
import Project from '../model/projectsSchema';

export const getProjects = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const projects = await Project.find();
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
  } catch (error) {
    next(error);
  }
};


export const getOneProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req?.params.id;
  try {
    const project = await Project.findById(id);
    if (!project) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }
    res.status(200).json({
      success: true,
      data: project,
    }); 
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
    next(err);
  }
};
