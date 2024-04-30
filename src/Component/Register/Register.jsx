import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Result } from "postcss";
import Swal from 'sweetalert2'



const Register = () => {
    const {createUser,setUserPhoto,selectedUser, setUser,logOut}=useContext(AuthContext)

    const handleRegister=e=>{
        e.preventDefault()

        const name=e.target.name.value 
        const photoUrl=e.target.photo.value 
        const email=e.target.email.value 
        const password=e.target.password.value 
        console.log(name,email,photoUrl,password)
        const userInfo={email,photoUrl,password,name}

        // setUserPhoto(photoUrl)

        if(password.length<6){
          return  Swal.fire({
            title: 'Login failed!',
            text: 'Password should be more than six character ',
            icon: 'error',
            confirmButtonText: 'Close'
          })
        }

        if(!/^(?=.*[A-Z]).+$/.test(password)) {
          return Swal.fire({
                title: 'Login failed!',
                text: 'Password should contain at least an uppercase letter',
                icon: 'error',
                confirmButtonText: 'Close'
              })
          
        }
        if(!/^(?=.*[a-z]).+$/.test(password)) {
          return Swal.fire({
                title: 'Login failed!',
                text: 'Password should contain at least an lowercase letter',
                icon: 'error',
                confirmButtonText: 'Close'
              })
          
        }


        

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            
            console.log(userInfo)
            fetch('https://monaliza-server.vercel.app/user',{
                            method:'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body:JSON.stringify(userInfo)
                        })
            .then(res=>res.json())
            .then(result=>{
                Swal.fire({
                    icon: "success",
                    title: "Registration successful",
                    text: "Login now!",
                    footer: '<a href="#">Please try again</a>'
                  });
            })
        })
        .catch(error=>{

            
            Swal.fire({
                icon: "error",
                title: "Register failed",
                text: "Something went wrong!",
                footer: '<a href="#">Please try again</a>'
              });
        })
        

    }
    logOut()
     

    return (
        <div >
            <div className="flex flex-col justify-center items-center mt-8 md:mt-12 lg:mt-14  p-6 md:p-10 lg:p-16 bg-[#fff7f7] rounded-md ">
                <h1 className="pb-8 text-3xl font-bold opacity-80">Register Now</h1>
                <form onSubmit={handleRegister} className="flex flex-col space-y-6 bg-[#f4e8e8] p-4 md:p-8 lg:p-10 rounded-md w-full md:w-[550px] lg:w-[600px]" >
                    <input type="text" name="name" placeholder="User Name" className="input input-bordered  " />
                    <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full " />
                    <input type="email" name="email" placeholder="Email" className="input input-bordered w-full  " required />
                    <input type="password" name="password" placeholder="password" className="input input-bordered w-full  " required />
                    <input type="submit" value="Register"  className="btn btn-block bg-[#90c9ce]" />
                    <p>Already registered? <Link to="/logIn"><span className="text-[#90c9ce] font-bold"> LogIn</span></Link></p>
                </form>
            </div>
            
        </div>
    );
};

export default Register;