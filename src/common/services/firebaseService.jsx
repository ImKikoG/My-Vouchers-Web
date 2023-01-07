import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWf0-rL8jbO9FRwHju1bnUJ2a4ZRHDqKA",
  authDomain: "myvouchers-2f421.firebaseapp.com",
  projectId: "myvouchers-2f421",
  storageBucket: "myvouchers-2f421.appspot.com",
  messagingSenderId: "907727110226",
  appId: "1:907727110226:web:f0daa9309b21e59b9e5f8b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
