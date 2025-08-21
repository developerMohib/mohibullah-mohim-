export interface GitHubEvent {
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