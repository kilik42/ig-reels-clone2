// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDC5VmErk3WRbjgdNyQCmmOQxyTlWn-AU8",
    authDomain: "reelsclone-60856.firebaseapp.com",
    projectId: "reelsclone-60856",
    storageBucket: "reelsclone-60856.appspot.com",
    messagingSenderId: "325811160988",
    appId: "1:325811160988:web:f9eb1bd6a2d423cf982a59",
    measurementId: "G-LS6NC45RR2"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;
