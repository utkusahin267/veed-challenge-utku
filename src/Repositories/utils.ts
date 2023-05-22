import { GithubRepository } from "../types";

export const getLanguagesUsedFromRepositories = (repositories?: GithubRepository[]) => {
  const languages = new Set<string>([]);
  repositories?.forEach((repository) => {
    languages.add(repository.language)
  })

  return languages;
}