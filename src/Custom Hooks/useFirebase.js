import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Firebase/Firebase.initialization";

initializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const [status, setStatus] = useState(true);
    
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const RegisterByEmailAndPass = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
            setUserName(name);
        })
    }

    const setUserName = name => {
        updateProfile(auth.currentUser, { displayName: name })
        .then(result => { })
    }

    const LogInByEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
        setStatus(false);
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
           if(user){
            setUser(user);
           }
           setStatus(false);
        })
    }, [])
    
    return {
        googleSignIn, 
        RegisterByEmailAndPass,
        LogInByEmailAndPass,
        logout,
        user,
        error, 
        status
    }
};

export default useFirebase;