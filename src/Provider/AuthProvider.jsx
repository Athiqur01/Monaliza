import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.config";

const auth=getAuth(app)
export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
     
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    const [email,setEmail]=useState(null)
    const [subcatagory, setSubcatagory]=useState(null)
    const [userPhoto, setUserPhoto]=useState(()=>localStorage.getItem('userPhoto'))
    // const [userPhoto, setUserPhoto]=useState(null)
    const [selectedUser, SetSelectedUser]=useState(null)
    const [theam, setTheam]=useState( () => localStorage.getItem('theam') === 'true')
    const [userForNavbar, setUserForNavbar]=useState(null)
    const [updateId, setUpdateId]=useState(null)

    const googleProvider= new GoogleAuthProvider()

    console.log(userForNavbar)
    
    if(userForNavbar){
        localStorage.setItem('userPhoto',userForNavbar.photoUrl );
        localStorage.setItem('userName',userForNavbar.name);

    }


    // useEffect(() => {
    //     if(userPhoto){
    //         localStorage.setItem('userPhoto',userPhoto );
    //     }
        
    //   }, [userPhoto]);

    useEffect(() => {
        localStorage.setItem('theam', theam);
      }, [theam]);
    
      const toggleTheam = () => {
        // Toggle the theme
        setTheam( !theam);
        if(theam){
            console.log('theam is true',theam)
            document.querySelector('html').setAttribute('data-theme','synthwave')
        }
        else{
            console.log('theam is false',theam)
            document.querySelector('html').setAttribute('data-theme','light')
        }
      };



    

    const createUser=(email,password)=>{

        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const logInUser=(email,password)=>{

        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password)
    }

    const createGoogleUser=()=>{
        setLoading(true)

      return  signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setEmail(currentUser.email)
            setTheam(theam) 
            setUserPhoto(selectedUser?.photoUrl)
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
                    SetSelectedUser,
                    toggleTheam,
                    theam,userForNavbar, setUserForNavbar,createGoogleUser,updateId, setUpdateId

                   }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;