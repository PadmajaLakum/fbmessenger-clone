import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    
        apiKey: "AIzaSyCKKerALX0E7NJwCqo3fw8YMBThOrCU4hE",
        authDomain: "fbmessenger-clone-7f698.firebaseapp.com",
        databaseURL: "https://fbmessenger-clone-7f698-default-rtdb.firebaseio.com",
        projectId: "fbmessenger-clone-7f698",
        storageBucket: "fbmessenger-clone-7f698.appspot.com",
        messagingSenderId: "1097963880273",
        appId: "1:1097963880273:web:1c34a4968b2acf9fb8dd70",
        measurementId: "G-FGG8H70DZ1"
});
const db=firebaseApp.firestore();

export default db;