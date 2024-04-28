import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Result } from "postcss";



const Register = () => {
    const {createUser}=useContext(AuthContext)

    const handleRegister=e=>{
        e.preventDefault()
        const name=e.target.name.value 
        const photoUrl=e.target.photo.value 
        const email=e.target.email.value 
        const password=e.target.password.value 
        console.log(name,email,photoUrl,password)
        const userInfo={email,photoUrl,password,name}

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            
            console.log(userInfo)
            fetch('http://localhost:5018/user',{
                            method:'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body:JSON.stringify(userInfo)
                        })
            .then(res=>res.json())
            .then(result=>{
                console.log(result)
            })
        })
        .catch(error=>console.error(error))
        

    }



    return (
        <div >
            <div className="flex flex-col justify-center items-center mt-8 md:mt-12 lg:mt-14  p-6 md:p-10 lg:p-16 bg-[#fff7f7] rounded-md ">
                <h1 className="pb-8 text-3xl font-bold opacity-80">Register Now</h1>
                <form onSubmit={handleRegister} className="flex flex-col space-y-6 bg-[#f4e8e8] p-4 md:p-8 lg:p-10 rounded-md w-full md:w-[550px] lg:w-[600px]" >
                    <input type="text" name="name" placeholder="User Name" className="input input-bordered  " />
                    <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full " />
                    <input type="email" name="email" placeholder="Email" className="input input-bordered w-full " />
                    <input type="password" name="password" placeholder="password" className="input input-bordered w-full " />
                    <input type="submit" value="Register"  className="btn btn-block bg-[#90c9ce]" />
                    <p>Already registered? <Link to="/logIn"><span className="text-[#90c9ce] font-bold"> LogIn</span></Link></p>
                </form>
            </div>
            
        </div>
    );
};

export default Register;