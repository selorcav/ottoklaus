import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDgQVgq-smZ-PrraEEAkUziA9O2yKtjXYA",
  authDomain: "prueba-ottoklaus-crud-auth.firebaseapp.com",
  databaseURL: "https://prueba-ottoklaus-crud-auth.firebaseio.com",
  projectId: "prueba-ottoklaus-crud-auth",
  storageBucket: "prueba-ottoklaus-crud-auth.appspot.com",
  messagingSenderId: "509242189686",
  appId: "1:509242189686:web:fd3543098b1746362e7c57"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}