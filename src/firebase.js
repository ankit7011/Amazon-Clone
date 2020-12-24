import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8IJ82jtdZyE2sKMG7iaZiKKjme8GKPUs",
  authDomain: "challenge-6280d.firebaseapp.com",
  projectId: "challenge-6280d",
  storageBucket: "challenge-6280d.appspot.com",
  messagingSenderId: "367829989902",
  appId: "1:367829989902:web:39c76da50616a219b09a5f",
  measurementId: "G-L16XC97J6G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

