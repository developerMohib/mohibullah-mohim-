import { NextFunction, Request, Response } from 'express';
import Review from '../model/reviewsSchema';

export const getReviews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reviews = await Review.find();
    res.status(200).json({
      success: true,
      message: 'Reviews are retrived successfully',
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
};
