import { NextFunction, Request, Response } from 'express';
import BlogPost from '../model/blogSchema';


export const getBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const blogs = await BlogPost.find();
    if (!blogs.length) {
      res.status(404).json({
        success: false,
        message: 'No blogs found in the database.',
        data: [],
      });
      return;
    }
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

export const updateOneBlog = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // here logic
    const id = req.params.id;
    
    const updatedData = req.body;
    console.log('udate dat',typeof updatedData)
    const resultUpdate = await BlogPost.updateOne(
      { _id: id },
      { 
        $set: {
          ...updatedData,
          updatedAt: new Date() // Always update this field
        },
        $setOnInsert: { // Only set when creating new document
          createdAt: new Date(),
        }
      },
      { 
        upsert: true,
      }
    );
    console.log('71 blog update', resultUpdate);
    res.status(200).json({
      success: true,
      message: 'Blog Update successfully',
      data : resultUpdate,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
