import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../Login';

test('renders login page correctly', () => {
  render(<Login />);
  const headerElement = screen.getByText(/This is the Sample Login Page./i);
  expect(headerElement).toBeInTheDocument();
});
