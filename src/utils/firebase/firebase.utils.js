import { initializeApp } from 'firebase/app';
import {
   getAuth, 
   signInWithRedirect, 
   signInWithPopup, 
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWitGooglehRedirect = () => signInWithRedirect(auth, googleProvider);

// export const db = getFirestore();
export const db = initializeFirestore(firebaseApp, {
  experimentalForceLongPolling: true,
});

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  // console.log(userAuth.uid);
  if(!userAuth) return;
  
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
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  } ;
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}
