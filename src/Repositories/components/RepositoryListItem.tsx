import { GithubRepository } from "../../types";
import StarDisplay from "../../components/StarDisplay";
import { RepositoryListItemLabel } from "./RepositoryListItemLabel";
import '../RepositoryList.css'

interface IRepositoryListItem {
  repository: GithubRepository;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const RepositoryListItem = ({ repository, toggleFavorite, isFavorite }: IRepositoryListItem) => {
  const { name, html_url, description, stargazers_count, id } = repository;

  const onClickItem = () => {
    toggleFavorite(id.toString());
  }

  return (
    <div className="repository-list-item-wrapper">
      <RepositoryListItemLabel label="Name" value={name} />
      <RepositoryListItemLabel label="Link" value={<a href={html_url} target="_blank" rel="noreferrer">{html_url}</a>} />
      <RepositoryListItemLabel label="Description" value={description} />
      <div className="star-display-position"><StarDisplay onClick={onClickItem} likeCount={stargazers_count} isLiked={isFavorite(id.toString())} /></div>
    </div>
  )
}