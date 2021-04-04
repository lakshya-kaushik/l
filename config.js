import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyC1Vd-m0M6MVbQ4gpMI5JiMcgcR2ZcRLAg",
  authDomain: "booksanta-6be33.firebaseapp.com",
  projectId: "booksanta-6be33",
  storageBucket: "booksanta-6be33.appspot.com",
  messagingSenderId: "1007011337710",
  appId: "1:1007011337710:web:d381643d94a4385d686aff"
};
firebase.initializeApp(firebaseConfig)
export default firebase.firestore()