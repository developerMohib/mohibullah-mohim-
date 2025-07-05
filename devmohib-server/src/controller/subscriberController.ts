import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';
import subscriber from '../model/subscriberSchema';

export const subscribe = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email } = req.body;
    console.log(' email', email);
    if (!email) {
      res.status(404).json({
        success: false,
        message: 'Email not found',
      });
      return;
    }

    // Check if subscriber already exists
    const existingSubscriber = await subscriber.findOne({ email });
    if (existingSubscriber) {
      res.status(409).json({
        success: false,
        message: 'This email is already subscribed',
      });
      return;
    }

    // Create new subscriber
    const newSubscriber = new subscriber({ email });
    await newSubscriber.save();

    res.status(201).json({
      success: true,
      message: 'Thank you for subscribing!',
      data: newSubscriber,
    });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process subscription',
    });
    next(error);
  }
};
