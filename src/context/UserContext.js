import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    //  creating new account
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };


    // user login with email password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    // sign out

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // google sign in

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // git sign in

    const signInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    }



    //updating profile for setting up name

    const profile = (name, photo) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })

    }


    // auth state change

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }
    }, [])




    const authInfo = { user, loading, createUser, signIn, logOut, signInWithGoogle, signInWithGitHub, profile };






    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;