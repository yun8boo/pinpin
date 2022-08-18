import {
  getAuth,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  signInWithRedirect,
  GoogleAuthProvider,
  signOut,
  User as FbUser,
} from 'firebase/auth';
import { firebaseApp } from '../init';
const provider = new GoogleAuthProvider();

export type User = FbUser;

export const login = () => {
  const auth = getAuth(firebaseApp);
  signInWithRedirect(auth, provider);
};

export const logout = async () => {
  const auth = getAuth(firebaseApp);
  signOut(auth);
};

export const onAuthStateChanged = (callback: (user: User | null) => void) => {
  const auth = getAuth(firebaseApp);

  onFirebaseAuthStateChanged(auth, (user) => {
    const userInfo = user ? user : null;
    callback(userInfo);
  });
};
