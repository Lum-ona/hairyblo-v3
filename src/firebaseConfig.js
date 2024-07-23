import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHXoY5F5acag0U7hX_ewK-QWWMpR1TNXA",
  authDomain: "hairyblo.firebaseapp.com",
  databaseURL: "https://hairyblo-default-rtdb.firebaseio.com",
  projectId: "hairyblo",
  storageBucket: "hairyblo.appspot.com",
  messagingSenderId: "31119207101",
  appId: "1:31119207101:web:d3b3a851f8557d4d9ee5d4",
  measurementId: "G-070NPTCM8M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const database = getFirestore();
export const db = getDatabase(app); // Initialize the Realtime Database
export const storage = getStorage(app); // Initialize Firebase Storage
