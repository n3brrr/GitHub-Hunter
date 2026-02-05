export interface GithubUser {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location?: string;
  company?: string;
  blog?: string;
  email?: string;
  html_url?: string;
}
