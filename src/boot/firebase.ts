import { boot } from 'quasar/wrappers'


import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore, serverTimestamp } from 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {

  apiKey: 'AIzaSyAdshBWWoTvxIc5Dkh_l6Vg7f9tDXagLBY',

  authDomain: 'firechatquasar.firebaseapp.com',

  projectId: 'firechatquasar',

  storageBucket: 'firechatquasar.appspot.com',

  messagingSenderId: '652287415113',

  appId: '1:652287415113:web:6cec5d78e8a705fd2a0098',

  measurementId: 'G-BP29ZVL80X'

};


// Initialize Firebase

initializeApp(firebaseConfig);

const db = getFirestore()
const auth = getAuth();
const tempsServeur = serverTimestamp();

export { db, auth, tempsServeur };

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
})
