import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYRw9g7lcbsD366BWvNs92j06s_dQt-3I",
  authDomain: "restarther-9b10c.firebaseapp.com",
  projectId: "restarther-9b10c",
  storageBucket: "restarther-9b10c.firebasestorage.app",
  messagingSenderId: "327056919758",
  appId: "1:327056919758:web:8a0c5f9ed6fd3dd688949f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);