import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzHsY98AKlNTJ8FPfXp4ITm3CdCIJKztE",
  authDomain: "af-fileupload.firebaseapp.com",
  projectId: "af-fileupload",
  storageBucket: "af-fileupload.appspot.com",
  messagingSenderId: "533780622321",
  appId: "1:533780622321:web:aa9119c6d57f3a48617250",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
