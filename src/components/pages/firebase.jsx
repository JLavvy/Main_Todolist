import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKgXyfq-P5glHzrBPcSoUyAkyqLGUvv5k",
  authDomain: "my-todo-4b3cd.firebaseapp.com",
  projectId: "my-todo-4b3cd",
  storageBucket: "my-todo-4b3cd.appspot.com",
  messagingSenderId: "468096990586",
  appId: "1:468096990586:web:f737710ba21ca894776ac3",
  measurementId: "G-N1DNGB0XG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider =new GoogleAuthProvider();
export{auth, provider};
