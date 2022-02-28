import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyB8eIoYmprFqyJDNfaRzX5BsOkReNR1K-Q",
  authDomain: "slack-clone-f1fd7.firebaseapp.com",
  databaseURL: "https://slack-clone-f1fd7-default-rtdb.firebaseio.com",
  projectId: "slack-clone-f1fd7",
  storageBucket: "slack-clone-f1fd7.appspot.com",
  messagingSenderId: "944866815224",
  appId: "1:944866815224:web:0418ca965210b6fd059f0d",
  measurementId: "G-XNYL2WFGX7"


});


export const db = getFirestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
