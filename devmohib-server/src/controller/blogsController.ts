import { NextFunction, Request, Response } from 'express';
import BlogPost from '../model/blogSchema';

export const getBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const blogs = await BlogPost.find();
    res.status(200).json({
      success: true,
      message: 'Blogs are retrived successfully',
      data: blogs,
    });
  } catch (error) {
    next(error);
  }
};
