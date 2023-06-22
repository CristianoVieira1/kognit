import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import SignIn from '.';
import theme from '../../styles/theme';

jest.mock('../../hooks/auth', () => ({
  useAuth: () => ({
    signIn: jest.fn(),
  }),
}));

jest.mock('../../hooks/auth');
jest.mock('../../assets/icons/logo.png', () => 'mocked-logo.png');
jest.mock('react-toastify/dist/ReactToastify.css', () => '');

test('renders Sign In component', () => {
  render(
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );

  expect(screen.getByText(/Digite os seus dados de acesso no campo abaixo/i)).toBeInTheDocument();
});

test('calls signIn function on form submit', () => {
  const signInMock = jest.fn();
  const useAuthMock = jest.spyOn(require('../../hooks/auth'), 'useAuth');
  useAuthMock.mockReturnValue({ signIn: signInMock });

  render(
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );

  const emailInput = screen.getByPlaceholderText('e-mail');
  const passwordInput = screen.getByPlaceholderText('senha');
  const submitButton = screen.getByRole('button', { name: /Acessar/i });

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(submitButton);

  expect(signInMock).toHaveBeenCalledWith('test@example.com', 'password123');
});
