import { render, screen } from '@testing-library/react';
import App from './app';

// I just add a comment
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Fib Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
