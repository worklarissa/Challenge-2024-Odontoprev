import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';

export const AuthService = {
  cadastrar: async (email: string, senha: string): Promise<User> => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    return userCredential.user;
  },

  login: async (email: string, senha: string): Promise<User> => {
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    return userCredential.user;
  },

  logout: async (): Promise<void> => {
    await signOut(auth);
  },

  usuarioAtual: (): User | null => {
    return auth.currentUser;
  }
};

