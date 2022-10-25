import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState({ displayName: 'aaaaa' });

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    //  creating new account
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };


    // user login with email password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    // sign out

    const logOut = () => {
        return signOut(auth);
    }

    // google sign in

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // git sign in

    const signInWithGitHub = () => {
        return signInWithPopup(auth, gitProvider);
    }


    // auth state change

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => {
            unSubscribe();
        }
    }, [])




    const authInfo = { user, createUser, signIn, logOut, signInWithGoogle, signInWithGitHub };






    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;