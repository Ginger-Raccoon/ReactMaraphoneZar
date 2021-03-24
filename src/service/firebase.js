import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBZzh2pVp-NDPC8cOrhaELkA5zm2grCaog",
    authDomain: "react-marathone-247d7.firebaseapp.com",
    databaseURL: "https://react-marathone-247d7-default-rtdb.firebaseio.com",
    projectId: "react-marathone-247d7",
    storageBucket: "react-marathone-247d7.appspot.com",
    messagingSenderId: "610020772735",
    appId: "1:610020772735:web:8b3cc7aef28c706775284a"
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database= fire.database();

export default database;
