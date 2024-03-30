// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7cwmD5ENarHGxRyv3yXKG25OzQYFz8eY",
  authDomain: "task-management-coder-squad.firebaseapp.com",
  projectId: "task-management-coder-squad",
  storageBucket: "task-management-coder-squad.appspot.com",
  messagingSenderId: "689336120219",
  appId: "1:689336120219:web:437dbaad576d1b0f63a73e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;