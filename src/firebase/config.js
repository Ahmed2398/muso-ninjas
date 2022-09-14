//new V9 imports 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAY9xsRISGUyjY1690Vq-KcfCGQTqnOIFc",
    authDomain: "muso-ninjas-d7124.firebaseapp.com",
    projectId: "muso-ninjas-d7124",
    storageBucket: "muso-ninjas-d7124.appspot.com",
    messagingSenderId: "338158583320",
    appId: "1:338158583320:web:38c6c9638453c971384d6d"
};
  

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
// asm DB (projectFirestore)
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorge = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth,  projectFirestore,  projectStorge, timestamp }