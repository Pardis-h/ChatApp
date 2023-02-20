import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA2BMws7Mq4AKKkMKFC2OJFLGj6P3IBofo",
    authDomain: "pasgram-c57df.firebaseapp.com",
    projectId: "pasgram-c57df",
    storageBucket: "pasgram-c57df.appspot.com",
    messagingSenderId: "575225019253",
    appId: "1:575225019253:web:0b58dad041e9969ab5f13c"
  }).auth();