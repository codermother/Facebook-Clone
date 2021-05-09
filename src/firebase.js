import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqEKq4BKNdmoaLdksRqZDlKwXy6Q1K7ts",
  authDomain: "facebook-clone-v3.firebaseapp.com",
  projectId: "facebook-clone-v3",
  storageBucket: "facebook-clone-v3.appspot.com",
  messagingSenderId: "719236747100",
  appId: "1:719236747100:web:dc79c3c8b3095a50713b99",
  measurementId: "G-E5S6V4JER5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
