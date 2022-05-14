import firebase from 'firebase/compat/app';
import "firebase/compat/database";


const config = {
    // API KEYS
    apiKey: "AIzaSyAzBp36RLNat-Cgsagu_DcH48S9MBTKWZQ",
    authDomain: "firevuechat-605f6.firebaseapp.com",
    projectId: "firevuechat-605f6",
    storageBucket: "firevuechat-605f6.appspot.com",
    messagingSenderId: "489723806610",
    appId: "1:489723806610:web:b8e1844a5cde7a0fa6b74b"
}

const db = firebase.initializeApp(config);
export default db;

