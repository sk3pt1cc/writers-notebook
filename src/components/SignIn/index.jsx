import React from 'react'
import firebase from 'firebase'
import { auth } from '../../firebase.setup';

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider
        auth.signInWithPopup(provider)
    }

    return (
        <button onClick={signInWithGoogle}>Sign In</button>
    )
}

export default SignIn