import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDx8K3y5NQo1aBvKF4IZfn6P33svKcEuto",
  authDomain: "facebook-d6d9c.firebaseapp.com",
  projectId: "facebook-d6d9c",
  storageBucket: "facebook-d6d9c.appspot.com",
  messagingSenderId: "1036836846369",
  appId: "1:1036836846369:web:3c5f9e0fd8a3bd43739c60",
  measurementId: "G-5H8JVCTJJF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
