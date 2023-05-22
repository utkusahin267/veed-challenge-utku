import { useState } from "react";
import useRepositoryFavorite from "./hooks/useRepositoryFavorite";
import { GithubRepository } from "../types";
import './RepositoryList.css'
import { getLanguagesUsedFromRepositories } from "./utils";
import { RepositoryListItem } from "./components/RepositoryListItem";
import Checkbox from "../components/Checkbox";
import Dropdown from "../components/Dropdown";

const SELECTED_LANGUAGE_DEFAULT = 'ALL';


interface Filters {
  onlyFavorites: boolean;
  selectedLanguage: string;
}

interface IRepositoryList {
  repositories?: GithubRepository[]
}

const RepositoryList = ({ repositories }: IRepositoryList) => {
  const { isFavorite, toggleFavorite } = useRepositoryFavorite();
  const [filters, setFilters] = useState<Filters>({ onlyFavorites: false, selectedLanguage: SELECTED_LANGUAGE_DEFAULT });
  const usedLanguages = getLanguagesUsedFromRepositories(repositories);
  const filteredRepositories = repositories?.filter((repository) => (filters.selectedLanguage === SELECTED_LANGUAGE_DEFAULT || repository.language === filters.selectedLanguage) && (!filters.onlyFavorites || isFavorite(repository.id.toString())));

  return (
    <div className="repository-list-wrapper">
      <Checkbox label="Only show favorites" id="favorites" onChange={(selected) => setFilters((prevState) => ({ ...prevState, onlyFavorites: selected.target?.checked }))} />
      <Dropdown label="Choose a language:" id="languages" defaultValue={SELECTED_LANGUAGE_DEFAULT} options={Array.from(usedLanguages)} onChange={(selected) => setFilters((prevState) => ({ ...prevState, selectedLanguage: selected.target?.value }))} />
      <div className="repository-list">
        {!filteredRepositories?.length && <div>There are no repositories to display with current filters</div>}
        {filteredRepositories?.map((repository) => (
          <RepositoryListItem key={repository.id} repository={repository} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
        ))}
      </div>
    </div>
  )
}

export default RepositoryList;