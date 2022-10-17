import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCA11QcB2vlW9I1AW5s79iW-h3dYgxs6p8",
  authDomain: "inmobile-84e1a.firebaseapp.com",
  projectId: "inmobile-84e1a",
  storageBucket: "inmobile-84e1a.appspot.com",
  messagingSenderId: "1072420474657",
  appId: "1:1072420474657:web:c031e0b50bdc1b5f22b860"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);