import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { 
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInWitGooglehRedirect } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';
// import { async } from '@firebase/util';


const Authentication = () => {
    // useEffect(() => {
    //     async function foo() {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     foo();
    // }, [] );
    
    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;