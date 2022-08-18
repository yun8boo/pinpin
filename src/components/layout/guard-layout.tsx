import { useRouter } from 'next/router';
import { useEffect, ReactNode } from 'react';
import { useAuthContext } from '@/providers/auth-provider';

type Props = {
  children: ReactNode;
};

export const GuardLayout = ({ children }: Props) => {
  const { currentUser } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (currentUser === null) {
      // 未ログイン時
      router.push('/login');
    }
  }, [currentUser, router]);

  // 立ち上げ時
  if (currentUser === undefined) {
    return <p>loading...</p>;
  }

  // 未ログイン時
  if (currentUser === null) {
    return null;
  }

  return <>{children}</>;
};
