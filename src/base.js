import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD7939qAabMTD6tGtY6UMUC4Yk7C9VRVpM",
    authDomain: "very-hot-burgers-7b107.firebaseapp.com",
    databaseURL: "https://very-hot-burgers-7b107-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;