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

export const getOneBlog = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req?.params.id;
  try {
    const post = await BlogPost.findById(id);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.status(200).json({
      success: true,
      data: post,
    }); 
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
    next(err);
  }
};
