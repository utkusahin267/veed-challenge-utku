import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import mock_repositories from './mock-data/repositories';
import * as gitHubHooks from './Repositories/hooks/useGithubRepository';

describe('Initial page', () => {
  test('renders successfully', () => {
    jest.spyOn(gitHubHooks, 'useGitHubRepositorySearch').mockImplementation(() => ({
      data: { items: mock_repositories },
      error: undefined,
      loading: undefined
    }));
    render(<App />);
    const element = screen.getByText(/Only show favorites/i);
    expect(element).toBeInTheDocument();
  });

  test('renders with error', () => {
    jest.spyOn(gitHubHooks, 'useGitHubRepositorySearch').mockImplementation(() => ({
      data: undefined,
      error: new Error(),
      loading: undefined
    }));
    render(<App />);
    const element = screen.getByText(/There has been an error while retrieving repository information./i);
    expect(element).toBeInTheDocument();
  });

  test('loading', () => {
    jest.spyOn(gitHubHooks, 'useGitHubRepositorySearch').mockImplementation(() => ({
      data: undefined,
      error: undefined,
      loading: true
    }));
    render(<App />);
    const element = screen.getByText(/Loading repositories/i);
    expect(element).toBeInTheDocument();
  });

  test('no data found', () => {
    jest.spyOn(gitHubHooks, 'useGitHubRepositorySearch').mockImplementation(() => ({
      data: { items: [] },
      error: undefined,
      loading: true
    }));
    render(<App />);
    const element = screen.getByText(/Loading repositories/i);
    expect(element).toBeInTheDocument();
  });
})
