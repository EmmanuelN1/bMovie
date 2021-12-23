import firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyBAFHBeS6hxlNz_e3pcYLQ9oqWbVMGKE40",
    authDomain: "bookflix-8da99.firebaseapp.com",
    projectId: "bookflix-8da99",
    storageBucket: "bookflix-8da99.appspot.com",
    messagingSenderId: "150177187394",
    appId: "1:150177187394:web:4cfcc689ae57f421670fdb",
    measurementId: "G-VGZ28ECXJC" 
  };
  


  /* Setting up our firebase app */

  //initializing the firebaseApp
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //firestore is the data base we will be using and it is being initialize on the next line
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;