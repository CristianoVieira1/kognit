import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import Input from '.';

import theme from '../../styles/theme';

describe('Input', () => {
  it('renders input correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Input type="text" placeholder="Enter text" />
      </ThemeProvider>
    );
    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('handles input change', () => {
    const handleChange = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Input type="text" onChange={handleChange} />
      </ThemeProvider>
    );
    const inputElement = screen.getByRole('textbox');
    const inputValue = 'Test value';
    userEvent.type(inputElement, inputValue);
    expect(handleChange).toHaveBeenCalledTimes(inputValue.length);
  });
});
