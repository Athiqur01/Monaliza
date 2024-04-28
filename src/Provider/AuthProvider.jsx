import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.config";

const auth=getAuth(app)
export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
     
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    const [email,setEmail]=useState(null)
    const [subcatagory, setSubcatagory]=useState(null)
    const [userPhoto, setUserPhoto]=useState(null)
    const [selectedUser, SetSelectedUser]=useState(null)

    const createUser=(email,password)=>{

        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const logInUser=(email,password)=>{

        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setEmail(currentUser.email)
            console.log('current user',currentUser)
        })
        return ()=>{
            unSubscribe()
        } 
    },[])

    const logOut=()=>{
        return signOut(auth)
    }

    const userInfo={
                    user,
                    setUser,
                    setLoading,
                    loading,
                    setLoading,
                    createUser,
                    logInUser,
                    email,
                    setEmail,
                    logOut,
                    subcatagory,
                    setSubcatagory,
                    userPhoto, 
                    setUserPhoto,
                    SetSelectedUser

                   }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;