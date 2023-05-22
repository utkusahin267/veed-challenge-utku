import { GithubRepository } from "../types";

export interface GithubRepositorySearchResponse {
  incomplete_results?: boolean;
  items: GithubRepository[];
  total_count?: number;
}