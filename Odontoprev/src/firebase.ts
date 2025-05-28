import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// @ts-ignore
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyDPPe_-HSAyozs4evfDm-ZS6dl7mvBX8u0",
  authDomain: "odontoprev-b43fb.firebaseapp.com",
  projectId: "odontoprev-b43fb",
  storageBucket: "odontoprev-b43fb.firebasestorage.app",
  messagingSenderId: "565438085769",
  appId: "1:565438085769:web:8319159df0232f2e2fa458"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
