import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Aside from '.';
import { useAuth } from '../../hooks/auth';

import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

jest.mock('../../assets/icons/logo_white.png', () => 'mocked-logo-white.png');

jest.mock('../../hooks/auth', () => {
  return {
    __esModule: true,
    useAuth: jest.fn(),
  };
});

describe('Aside Component', () => {
  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({
      signOut: jest.fn(),
    });

    render(
      <ThemeProvider theme={theme}>
        <Aside />
      </ThemeProvider>
    );
  });

  test('renders the component', () => {
    const logoElement = screen.getByAltText('Logo Kognit');
    expect(logoElement).toBeInTheDocument();
  });

  test('calls signOut function on button click', () => {
    const signOutButton = screen.getByRole('button', { name: 'Sair' });

    fireEvent.click(signOutButton);

    expect(useAuth().signOut).toHaveBeenCalled();
  });
});
