import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDMeQsqQqkxBqgVirdSTZCCnFPxYOhDXgs',
  authDomain: 'music-8563d.firebaseapp.com',
  projectId: 'music-8563d',
  storageBucket: 'music-8563d.appspot.com',
  appId: '1:498170685795:web:8aed71cba7ad4227b50b56'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const userCollection = db.collection('users')

export { auth, db, userCollection }
