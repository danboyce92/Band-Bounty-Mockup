import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../firebase/firebase';

const SignoutButton = () => {

    const signout = async () => {
        await signOut(auth);

    }

    return (
        <div>
            <button onClick={() => {signout()}}>
                Signout
            </button>
        </div>
    )
}

export default SignoutButton;