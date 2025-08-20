import { NextFunction, Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
interface GitHubEvent {
  id: string;
  type: string; // e.g., "PushEvent", "PullRequestEvent"
  actor: {
    id: number;
    login: string;
    display_login: string;
    url: string;
  };
  repo: {
    id: number;
    name: string;
    url: string;
  };
  payload: Record<string, unknown>; // varies by event type
  public: boolean;
  created_at: string; // ISO timestamp
}



export const githubCommit = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = process.env.GITHUB_ACCESS_TOKEN;

    const response: AxiosResponse = await axios.get(
      `https://api.github.com/users/developerMohib/events`,
      {
        headers: { Authorization: `token ${token}` },
      },
    );
    const events = response.data;
    const contributions: Record<string, number> = {};
    
    events.forEach((event :GitHubEvent) => {
      const date = new Date(event.created_at).toISOString().split('T')[0];
      contributions[date] = (contributions[date] || 0) + 1;
    });
    res.status(200).json({
       success: true,
      message: "Data fetched successfully",
      data: contributions,
    });
  } catch (error) {
    next(error);
  }
};
