import React from 'react';
import { render, screen } from '@testing-library/react';
import mock_repositories from '../../mock-data/repositories';
import { RepositoryListItem } from './RepositoryListItem';
import userEvent from '@testing-library/user-event';

test('Onclick item', () => {
  const mockToggleFavorite = jest.fn();
  render(<RepositoryListItem repository={mock_repositories[0]} isFavorite={jest.fn()} toggleFavorite={mockToggleFavorite} />);
  const element = screen.getByRole(/button/i);
  userEvent.click(element);
  expect(mockToggleFavorite).toBeCalled()
});