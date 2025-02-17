import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { set } from "firebase/database";
import Swal from 'sweetalert2'
import { FaGoogle,FaGithub } from "react-icons/fa";





const LogIn = () => {

    const {logInUser, user, setUser,email,setEmail,loading,setLoading, setUserPhoto,SetSelectedUser,userForNavbar, setUserForNavbar,createGoogleUser}=useContext(AuthContext)
    console.log(logInUser)
    const userInfo=useLoaderData()
    const selectedUser=userInfo.find(info=>info.email===email)

    

    setUserForNavbar(selectedUser)
    console.log(email,selectedUser)
    
    
    SetSelectedUser(selectedUser)
     
    
    

    const handleLogin=e=>{
        e.preventDefault()
        setUserPhoto(selectedUser?.photoUrl)
        
        
        

        const email=e.target.email.value 
        const password=e.target.password.value 
        console.log(email,password)

        // if(password.length<6){
        //     return  Swal.fire({
        //       title: 'Login failed!',
        //       text: 'Password should be more than six character ',
        //       icon: 'error',
        //       confirmButtonText: 'Close'
        //     })
        //   }
  
        //   if(!/^(?=.*[A-Z]).+$/.test(password)) {
        //     return Swal.fire({
        //           title: 'Login failed!',
        //           text: 'Password should contain at least an uppercase letter',
        //           icon: 'error',
        //           confirmButtonText: 'Close'
        //         })
            
        //   }
        //   if(!/^(?=.*[a-z]).+$/.test(password)) {
        //     return Swal.fire({
        //           title: 'Login failed!',
        //           text: 'Password should contain at least an lowercase letter',
        //           icon: 'error',
        //           confirmButtonText: 'Close'
        //         })
            
        //   }
  

        const userInfo={email,password}
        logInUser(email,password)
        .then(result=>{
            setUser(result.user)
            
            if(result.user){
                Swal.fire({
                    title: 'Login successful!',
                    text: 'Login operation successfully done',
                    icon: 'success',
                    confirmButtonText: 'Close'
                    
                  })
                  
            }
            console.log('email', result.user.email)
            
        })
        .catch(error=>{
           console.error(error)
            
        })

    }


    const handleGoogleLogin=()=>{

        createGoogleUser()
        .then(result=>{
           
             
           
                console.log (result.user,result.user.email,result.user.displayName,result.user.photoURL )
                if(result.user){
                    localStorage.setItem('userPhoto',result.user.photoURL)
                    localStorage.setItem('userName',result.user.displayName)
                   
                   
                    Swal.fire({
                        title: 'Login successful!',
                        text: 'Login operation successfully done',
                        icon: 'success',
                        confirmButtonText: 'Close'
                      })
                      
                }

        
            
        })
        .catch(error=>{
            console.error(error)
        })
    }



    setLoading(false)

    return (
        <div className="bg-[#fff7f7]" >
            {loading && <span className="loading loading-spinner loading-lg"></span>}
            <div  className="flex flex-col justify-center items-center mt-8 md:mt-12 lg:mt-14  p-6 md:p-10 lg:p-16  rounded-md ">
                <h1 className="pb-8 text-3xl font-bold opacity-80">LogIn Now</h1>
                <form  onSubmit={handleLogin} className="flex flex-col space-y-6 bg-[#f4e8e8] p-4 md:p-8 lg:p-10 rounded-md w-full md:w-[550px] lg:w-[600px]" >
                    
                    <input type="email" name="email" placeholder="Email" className="input input-bordered w-full " />
                    <input type="password" name="password" placeholder="password" className="input input-bordered w-full " />
                    <input type="submit" value="LogIn"  className="btn btn-block bg-[#90c9ce]" />
                    <p>Not registered? <Link to="/register"><span className="text-[#90c9ce] font-bold"> Register</span></Link></p>
                    <p>Or</p>
                    <div className="flex justify-center">
                        <button onClick={handleGoogleLogin} className="pr-4 text-2xl"><FaGoogle /></button>
                        <button className="pl-4 text-2xl"><FaGithub /></button>
                    
                    

                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default LogIn;