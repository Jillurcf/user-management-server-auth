import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firbase.config";


export const auth = getAuth(app)

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
const [user, setUsers] = useState(null)
const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const siginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        user,
        loading,
        createUser,
        siginUser
    }
    
    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;