import { initializeApp } from 'firebase/app';
import {
   getAuth, 
   signInWithRedirect, 
   signInWithPopup, 
   GoogleAuthProvider } from 'firebase/auth';

import  {
  initializeFirestore,
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA6Gnm-lNX9i1hoDoB2lBInvOU5rE6v98Y",
  authDomain: "b-clothing-db.firebaseapp.com",
  projectId: "b-clothing-db",
  storageBucket: "b-clothing-db.appspot.com",
  messagingSenderId: "244285102540",
  appId: "1:244285102540:web:7db70ae60a583eacc06569"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// export const db = getFirestore();
export const db = initializeFirestore(firebaseApp, {
  experimentalForceLongPolling: true,
});

export const createUserDocumentFromAuth = async (userAuth) => {
  // console.log(userAuth.uid);
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if user data not exists
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email, 
        createAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  } ;
  return userDocRef;
}
