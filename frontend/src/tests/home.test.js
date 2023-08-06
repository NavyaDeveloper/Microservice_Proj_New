import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('renders home page correctly', () => {
  render(<Home />);
  const headerElement = screen.getByText(/This is the Sample Home Page./i);
  expect(headerElement).toBeInTheDocument();
});
