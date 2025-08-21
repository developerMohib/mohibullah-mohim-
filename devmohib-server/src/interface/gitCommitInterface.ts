export interface GitHubEvent {
  id: string;
  type: string;
  created_at: string;
  [key: string]: unknown;
}