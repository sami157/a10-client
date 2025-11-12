import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
            setErrorMessage('')
        });
        return () => unsubscribe();
    }, [user]);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password, isGoogle) => {
        if (!isGoogle) {
            return signInWithEmailAndPassword(auth, email, password)
        }
        else {
            return signInWithPopup(auth, provider)
        }
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const updateUserProfile = (name, image) => {
        if (name || image) {
            return updateProfile(authData.auth.currentUser, {
                displayName: name && name,
                photoURL: image && image
            })
        }
        else return Promise.reject()
    }
    
    const authData = {
        auth,
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        signOutUser,
        setErrorMessage,
        errorMessage,
        updateUserProfile
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;