import { createContext, useEffect, useState, useContext, ReactNode } from 'react';
import { onAuthStateChanged, User } from '@/libs/firebase/auth';

type AuthContextProps = {
  /**
   * currentUser: undefined -> 立ち上げ時
   * currentUser: null -> 未認証
   * currentUser: User -> 認証済み
   */
  currentUser: User | null | undefined;
};

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

type Props = {
  children: ReactNode;
};

// TODO 認証が必要ないページでもスプラッシュスクリーンが表示されるので、認証が必要なページのみGuardLayoutで括る
// ここではcurrentUserを返すのみにする
export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    onAuthStateChanged((user) => {
      // ログイン状態が変化すると呼ばれる
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
