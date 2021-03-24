import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCbgvi_ifbbkgfjG08Z6B6k_tTq8xSmJoo",
    authDomain: "slack-clone-eeba0.firebaseapp.com",
    projectId: "slack-clone-eeba0",
    storageBucket: "slack-clone-eeba0.appspot.com",
    messagingSenderId: "997293272962",
    appId: "1:997293272962:web:75b46b85c61dade840a99b"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db