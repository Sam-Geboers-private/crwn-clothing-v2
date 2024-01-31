import { initializeApp } from "firebase/app";
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDU4178lXcXQN4qLSD6QkA166hn2DBWX0Q",
  authDomain: "crwn-clothing-db-4d3f4.firebaseapp.com",
  projectId: "crwn-clothing-db-4d3f4",
  storageBucket: "crwn-clothing-db-4d3f4.appspot.com",
  messagingSenderId: "788161952036",
  appId: "1:788161952036:web:5ab333c6d66ca683281bb1"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);