
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFireStore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCd7bH4ozKcJOjITHNR4iO93oF4Kx9b64U",
  authDomain: "ecom-75b0a.firebaseapp.com",
  projectId: "ecom-75b0a",
  storageBucket: "ecom-75b0a.appspot.com",
  messagingSenderId: "236412736095",
  appId: "1:236412736095:web:2c9e2feffdf0c5dbc941ea",
  measurementId: "G-9EMGCVNRF8"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFireStore(app);
export const storage=getStorage(app);

export default app;