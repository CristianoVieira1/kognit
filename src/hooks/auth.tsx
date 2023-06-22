import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IAuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('@kognit:logged');
    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    if (email === 'kognit@gmail.com' && password === '123456') {
      localStorage.setItem('@kognit:logged', 'true');
      setLogged(true);
    } else {
      handleErrorToast();
    }
  };

  const signOut = () => {
    localStorage.removeItem('@kognit:logged');
    setLogged(false);
  };

  function handleErrorToast() {
    toast.error('Confira os campos e tente novamente!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>{children}</AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
