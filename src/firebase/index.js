import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBYlQpgZ7G0c_zXLJlKNLPhqcmf7WV6cik",
    authDomain: "levelup-97749.firebaseapp.com",
    projectId: "levelup-97749",
    storageBucket: "levelup-97749.appspot.com",
    messagingSenderId: "224986162608",
    appId: "1:224986162608:web:c2494569ca5b45802be275"
  };
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export var provider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage()
// export var recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
export var db = firebase.firestore();
export default function setFirebase (Vue) {
	Object.defineProperty( Vue.prototype, '$firebase', {
		get () {
			return firebaseApp
		}
	})
}