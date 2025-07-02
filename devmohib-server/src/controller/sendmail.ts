import { NextFunction, Request, Response } from 'express';
import { sendContactEmails } from '../utils/sendMailer';

export const sendMail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userData } = req.body;
  const { name, email, message } = userData;
  try {
    if (!name || !email) {
      res.status(400).json({
        success: false,
        message: 'Missing required fields',
      });
      return;
    }
    await sendContactEmails({ name, email, message });
    res
      .status(200)
      .json({ success: true, message: 'Emails sent successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send emails.' });
    next(error);
  }
};
