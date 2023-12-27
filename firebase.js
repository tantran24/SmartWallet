
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD7Kn5QXfXyE-EerM2RHqhi_KiLife_C3g",
  authDomain: "app1-7a37e.firebaseapp.com",
  projectId: "app1-7a37e",
  storageBucket: "app1-7a37e.appspot.com",
  messagingSenderId: "831447476546",
  appId: "1:831447476546:web:356eafa29f23f1775240db",
  measurementId: "G-220HR6R7HS"
}

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };