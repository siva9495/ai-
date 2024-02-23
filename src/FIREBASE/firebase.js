import firebase from "firebase/compat/app";
import 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getDatabase } from 'firebase/database'
import 'firebase/compat/storage';
import 'firebase/storage'
import 'firebase/compat/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyB00novSkKAsmaFouTjdkEMYGJyV9h4rfY",
    authDomain: "cameraxvideo-b127b.firebaseapp.com",
    projectId: "cameraxvideo-b127b",
    storageBucket: "cameraxvideo-b127b.appspot.com",
    messagingSenderId: "498851062903",
    appId: "1:498851062903:web:4f9a52fc713b8aca61d272",
    measurementId: "G-WZGL2W05VR"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}
  const analytics = firebase.analytics();
 const db = getDatabase();
 export { db, analytics }

 export default firebase;