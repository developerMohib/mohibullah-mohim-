import axios, { AxiosResponse } from 'axios';
import { NextFunction, Request, Response } from 'express';
import { GitHubEvent } from '../interface/commitInterface';
import config from '../config/config';

export const gitCommit = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = config.githubToken;
    const url: string = 'https://api.github.com/users/developerMohib/events';
      const response: AxiosResponse = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const events = response?.data;
    const contributions: Record<string, number> = {};

    events.forEach((event: GitHubEvent) => {
      const date = new Date(event.created_at).toISOString().split('T')[0];
      contributions[date] = (contributions[date] || 0) + 1;
    });

    res.status(200).json({
      success: true,
      message: 'Data fetched successfully',
      data: contributions,
    });
  } catch (error) {
    next(error);
  }
};
