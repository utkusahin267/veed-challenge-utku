import StarDisplay from ".";
import { render, screen } from '@testing-library/react';

test('Star display with like', () => {
  render(<StarDisplay isLiked likeCount={40} />);
  const element = screen.getByText(/⭐/i);
  expect(element).toBeInTheDocument();
});


test('Star display without like', () => {
  render(<StarDisplay isLiked={false} likeCount={40} />);
  const element = screen.getByText(/☆/i);
  expect(element).toBeInTheDocument();
});