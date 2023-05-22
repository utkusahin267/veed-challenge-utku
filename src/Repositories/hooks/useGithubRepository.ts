import useFetch from "../../hooks/useFetch";
import { getFormattedLastWeekDate } from "../../utils/date";
import { GITHUB_SEARCH_URL } from "../../api/constants";
import { GithubRepositorySearchResponse } from "../types";

export const useGitHubRepositorySearch = () => {
  const lastWeekDate = getFormattedLastWeekDate();
  const params = new URLSearchParams({ q: `created:>${lastWeekDate}`, sort: 'stars', order: 'desc' })
  const { data, error, loading } = useFetch<GithubRepositorySearchResponse>(`${GITHUB_SEARCH_URL}?${params}`);
  return { data, error, loading }
}