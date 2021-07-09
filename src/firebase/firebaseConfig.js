import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCTSXCZ7iIiHTyfXSZV3YCnuNCna8gjCzk",
    authDomain: "react-projects-cadaa.firebaseapp.com",
    projectId: "react-projects-cadaa",
    storageBucket: "react-projects-cadaa.appspot.com",
    messagingSenderId: "793579441642",
    appId: "1:793579441642:web:d82d7ec061f1ddcc1e3693"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export{
      db,
      googleAuthProvider,
      firebase
  }
