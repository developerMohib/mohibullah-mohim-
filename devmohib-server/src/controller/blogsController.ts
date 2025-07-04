import { NextFunction, Request, Response } from 'express';
import BlogPost from '../model/blogSchema';

export const getBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reviews = await BlogPost.find();
    res.status(200).json({
      success: true,
      message: 'Reviews are retrived successfully',
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
};
