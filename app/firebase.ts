import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJjAs8jVDhz9DW8XVhVdCsV41PTlp6t6M",
  authDomain: "tinkoff-78400.firebaseapp.com",
  projectId: "tinkoff-78400",
  storageBucket: "tinkoff-78400.appspot.com",
  messagingSenderId: "365559365808",
  appId: "1:365559365808:web:8c48e74309436a770ffb75"
};

const app = initializeApp(firebaseConfig);

export const AUTH = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(AUTH, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(AUTH, email, password);

export const logout = () => signOut(AUTH);

export const DB = getFirestore();