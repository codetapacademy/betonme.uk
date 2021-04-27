// import firebase from 'firebase'
// ES Modules:
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyD5wzoCsJ3FOaHASnMRFG5uaUrjg4tGMVM",
  authDomain: "bet-on-me-a3d77.firebaseapp.com",
  projectId: "bet-on-me-a3d77",
  storageBucket: "bet-on-me-a3d77.appspot.com",
  messagingSenderId: "208704318580",
  appId: "1:208704318580:web:2e3b3d2f8cd78ac6fcb521"
};

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
export const storage = firebase.storage()
export const ts = firebase.firestore.FieldValue.serverTimestamp();
export const auth = firebase.auth();
export const GitHubProvider = new firebase.auth.GithubAuthProvider()
