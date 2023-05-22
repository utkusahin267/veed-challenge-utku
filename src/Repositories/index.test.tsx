import React from 'react';
import { render, screen } from '@testing-library/react';
import RepositoryList from '.';
import mockRepositories from '../mock-data/repositories';
import userEvent from '@testing-library/user-event';
describe('Repository list', () => {
  test('select existing language', () => {
    render(<RepositoryList repositories={mockRepositories} />);
    const element = screen.getByRole('option', { name: 'HTML' })
    userEvent.click(element);
    const existingRepositoryName = screen.getAllByText(/DragGAN/i);
    expect(existingRepositoryName[0]).toBeInTheDocument();
  });

  test('select favorite checkbox', () => {
    render(<RepositoryList repositories={mockRepositories} />);
    const element = screen.getByRole('checkbox');
    userEvent.click(element);
    const existingRepositoryName = screen.getByText(/There are no repositories to display with current filters/i);
    expect(existingRepositoryName).toBeInTheDocument();
  });
});