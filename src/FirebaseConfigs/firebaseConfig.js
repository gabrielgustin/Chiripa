import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJFg9VbB4ddBllI0miF8l4uQZ8LO6PtTg",
  authDomain: "chiripa-ecommerce.firebaseapp.com",
  projectId: "chiripa-ecommerce",
  storageBucket: "chiripa-ecommerce.appspot.com",
  messagingSenderId: "966280801221",
  appId: "1:966280801221:web:f95cdd3661af351cfbb9ac"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);