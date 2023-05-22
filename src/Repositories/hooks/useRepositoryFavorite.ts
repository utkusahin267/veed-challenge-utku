import { useState } from "react";

export const REPOSITORY_LOCAL_STORAGE_KEY = 'FavoritedRepositories'

const initializeLocalStorage = () => {
  try {
    const localStorageItems = window.localStorage.getItem(REPOSITORY_LOCAL_STORAGE_KEY);
    if (!localStorageItems) {
      window.localStorage.setItem(REPOSITORY_LOCAL_STORAGE_KEY, JSON.stringify({}));
    }

    return localStorageItems ? JSON.parse(localStorageItems) : {};
  } catch (error) {
    throw new Error('Can not access local storage')
  }
}


const useRepositoryFavorite = () => {
  const [items, setItems] = useState(initializeLocalStorage())

  const isFavorite = (repositoryId: string) => items[repositoryId]

  const toggleFavorite = (repositoryId: string) => {
    const newItems = { ...items, [repositoryId]: !isFavorite(repositoryId) };

    try {
      window.localStorage.setItem(REPOSITORY_LOCAL_STORAGE_KEY, JSON.stringify(newItems))
    } catch (error) {
      throw new Error('Can not access local storage')
    }
    setItems(newItems)

  }

  return {
    isFavorite,
    toggleFavorite
  }
}

export default useRepositoryFavorite;