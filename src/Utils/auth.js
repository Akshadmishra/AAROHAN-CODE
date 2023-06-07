import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCXKsUZKw5CHSJZpJGJOvHO1AjZL7m7oos',
  authDomain: 'aarohan-cdb31.firebaseapp.com',
  databaseURL: 'https://aarohan-cdb31.firebaseio.com',
  projectId: 'aarohan-cdb31',
  storageBucket: 'aarohan-cdb31.appspot.com',
  messagingSenderId: '384571832950',
  appId: '1:384571832950:web:bd419ea2413179a2273d57'
};

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

/**
 * Logs into site via google
 * @param {Boolean} isPersistant Wether to persist auth
 * @return {Promise<any>} Post attempt
 */
async function login(isPersistant) {
  try {
    const persistance = isPersistant ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION;
    await auth.setPersistence(persistance);

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('openid');
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

    const result = await auth.signInWithPopup(provider);
    const user = result.user;

    if (user) {
      return true;
    } else {
      return new Error('Invalid User');
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

/**
 * Attempts to logout
 */
const logout = () => {
  if (!auth.currentUser) return;
  auth.signOut();
};

export { auth, firestore, storage, login, logout };
