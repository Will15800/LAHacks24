import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/firestore';

import {
  getAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwyak_NjshuY-F6Myhni_zjgIiTSQY9xw",
  authDomain: "lahacks2024-18b32.firebaseapp.com",
  projectId: "lahacks2024-18b32",
  storageBucket: "lahacks2024-18b32.appspot.com",
  messagingSenderId: "427363153354",
  appId: "1:427363153354:web:aba8c459f68f395333cb33",
  measurementId: "G-0JDNNV1MJS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();
const auth = getAuth(app);

export { app, auth, analytics, db };