
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEPiQ2kdJLy91pprQWpFgWtjcRSMIWHLM",
  authDomain: "pakwheels-ad65c.firebaseapp.com",
  projectId: "pakwheels-ad65c",
  storageBucket: "pakwheels-ad65c.appspot.com",
  messagingSenderId: "1008023784594",
  appId: "1:1008023784594:web:7d73e9de130d0089d8aa4b",
  measurementId: "G-48T5DNN63L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const imgDb = getStorage(app);