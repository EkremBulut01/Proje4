import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAncYDP8VFcqYyNPIg-cXUOyDuaGmquMp4",
    authDomain: "fitness-app-c8b6d.firebaseapp.com",
    projectId: "fitness-app-c8b6d",
    storageBucket: "fitness-app-c8b6d.appspot.com",
    messagingSenderId: "193335423232",
    appId: "1:193335423232:web:23039a9166b49fa77643e5",
    measurementId: "G-XQYNTYQRPG"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export { firebase } ;