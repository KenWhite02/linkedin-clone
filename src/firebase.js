import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCC-M8DQKUQ2zvJfIMuH4ykYoTQG2u9HT0',
  authDomain: 'linkedin-clone-37bd6.firebaseapp.com',
  projectId: 'linkedin-clone-37bd6',
  storageBucket: 'linkedin-clone-37bd6.appspot.com',
  messagingSenderId: '186108437746',
  appId: '1:186108437746:web:7e8ad0b63389750ffedc6b',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
