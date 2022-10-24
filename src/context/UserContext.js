import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState({ displayName: 'aaaaa' });

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


    // auth state change

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => {
            unSubscribe();
        }
    }, [])




    const authInfo = { user, createUser, signIn, logOut };






    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;