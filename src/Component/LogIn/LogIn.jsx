import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { set } from "firebase/database";



const LogIn = () => {

    const {logInUser, user, setUser,email,setEmail,loading,setLoading}=useContext(AuthContext)
    console.log(logInUser)
    
    

    const handleLogin=e=>{
        e.preventDefault()
        
        

        const email=e.target.email.value 
        const password=e.target.password.value 
        console.log(email,password)
        const userInfo={email,password}
        logInUser(email,password)
        .then(result=>{
            setUser(result.user)
            
            console.log(result.user)
            console.log('email', result.user.email)
            
        })
        .catch(error=>{
            console.error(error)
            
        })

    }

    setLoading(false)

    return (
        <div >
            {loading && <span className="loading loading-spinner loading-lg"></span>}
            <div className="flex flex-col justify-center items-center mt-8 md:mt-12 lg:mt-14  p-6 md:p-10 lg:p-16 bg-[#fff7f7] rounded-md ">
                <h1 className="pb-8 text-3xl font-bold opacity-80">LogIn Now</h1>
                <form onSubmit={handleLogin} className="flex flex-col space-y-6 bg-[#f4e8e8] p-4 md:p-8 lg:p-10 rounded-md w-full md:w-[550px] lg:w-[600px]" >
                    
                    <input type="email" name="email" placeholder="Email" className="input input-bordered w-full " />
                    <input type="password" name="password" placeholder="password" className="input input-bordered w-full " />
                    <input type="submit" value="LogIn"  className="btn btn-block bg-[#90c9ce]" />
                    <p>Not registered? <Link to="/register"><span className="text-[#90c9ce] font-bold"> Register</span></Link></p>
                </form>
            </div>
            
        </div>
    );
};

export default LogIn;