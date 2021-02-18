import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({ 
    
    apiKey: "AIzaSyBZJZPKQSBH-c9TPIbM-A8LEd7qWUXFRqk",
    authDomain: "facebook-messenger-clone-66f05.firebaseapp.com",
    projectId: "facebook-messenger-clone-66f05",
    storageBucket: "facebook-messenger-clone-66f05.appspot.com",
    messagingSenderId: "60658852334",
    appId: "1:60658852334:web:b58640f5aac135cb22aeff",
    measurementId: "G-4L6QFJM11W"
  
    })

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;



