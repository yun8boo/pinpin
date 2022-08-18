import { ReactNode } from 'react';
import { AuthProvider } from './auth-provider';

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  return <AuthProvider>{children}</AuthProvider>;
};
