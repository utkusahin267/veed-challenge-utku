import React from 'react';
import './App.css';
import RepositoryList from './Repositories';
import { useGitHubRepositorySearch } from './Repositories/hooks/useGithubRepository';

const App = () => {
  const { data, error, loading } = useGitHubRepositorySearch();

  if (error) {
    return <>There has been an error while retrieving repository information.</>
  }

  if (loading) {
    return <>Loading repositories</>
  }

  if (!data?.items) {
    return <>There are no items to display</>
  }

  return (
    <div className='content-area'>
      <RepositoryList repositories={data.items} />
    </div>
  );
}

export default App;
