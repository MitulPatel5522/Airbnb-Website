import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC5zSFCqfotle8-_aNebLI6V8w2yFEYqFQ",
  authDomain: "airbnb-website.firebaseapp.com",
  projectId: "airbnb-website",
  storageBucket: "airbnb-website.appspot.com",
  messagingSenderId: "382000315283",
  appId: "1:382000315283:web:5544de340f870b5fa48666",
  measurementId: "G-M4SXXRK6WH",
});
firebase.analytics();

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();
const FieldValue = firebase.firestore.FieldValue;

export { db, auth, provider, storage, FieldValue };
