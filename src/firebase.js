import firebase from "firebase/app"
import 'firebase/firestore'
   
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBCNyHlDc3EdErvdwc0nY9oHQaYtxPT_Ww",
    authDomain: "orginizer-d74d4.firebaseapp.com",
    databaseURL: "https://orginizer-d74d4.firebaseio.com",
    projectId: "orginizer-d74d4",
    storageBucket: "orginizer-d74d4.appspot.com",
    messagingSenderId: "4491210838",
    appId: "1:4491210838:web:de843ff933ae8bb3254bf7"
})

export {firebaseConfig as firebase}; 