import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            setErrorMessage('')
        });
        return () => unsubscribe();
    }, []);

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
            .then(
                
            )
            .catch((error) => {
                setErrorMessage(error.message)
            });
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
        errorMessage
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;