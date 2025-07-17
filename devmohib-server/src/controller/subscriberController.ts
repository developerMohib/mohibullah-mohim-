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
    // Need to send confirmation email on subscriber email
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

export const allSubscriber = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await subscriber.find();
    res.status(200).json({
      success: true,
      message: 'All subscriber retrived successfully',
      data: result,
    });
  } catch (error) {
    console.error('Subscription Find error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process subscription',
    });
    next(error);
  }
};

export const deleteSubscriber = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.body;
    console.log('email subs',id)
    const result = await subscriber.deleteOne({ _id : id});
console.log('80 subscribe',)
    if (result.deletedCount === 0) {
      res
        .status(404)
        .json({ error: 'No subscriber found with this email' });
        return
    }
  

    res
      .status(200)
      .json({ success: true, message: 'Subscriber deleted successfully' });
  } catch (error) {
    console.error('Failled to delete this one:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete subscription',
    });
    next(error);
  }
};
