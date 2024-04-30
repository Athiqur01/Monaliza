import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Toggle } from 'rsuite';
import { Tooltip } from 'react-tooltip'


const Navbar = () => {

    const {logInUser, user, setUser,email,setEmail,userPhoto,logOut,toggleTheam,updateId}=useContext(AuthContext)

    

    const handleLogout=()=>{
        logOut()
        .then(()=>{
            setUser('')
        })
        .catch(error=>{
            console.error(error)
        })
    }

    const navLink=<>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/AllArtAndCriftItems">All Art and Craft Items</NavLink></li>
                    <li><NavLink to="/AddCriftItems">Add Craft Items</NavLink></li>
                    <li><NavLink to="/MyArtAndCraftList">My Art Craft List</NavLink></li>
                    
        
                 </>

const userImg=localStorage.getItem('userPhoto');
const userNameFor=localStorage.getItem('userName');
console.log(userImg,userNameFor)




    return (
        <div>
              <div className="navbar bg-[#7eb6bb] rounded-t-lg p-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a></a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className=" text-xl font-bold ">Mona<span className=''>l</span>iza</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end font-bold">
    {
        user? <> <Tooltip anchorSelect=".my-anchor-element" place="top">
        
        <button className='btn btn-circle border-none tooltip'  data-tip={userNameFor}><img className='w-full h-full rounded-full' src={userImg} alt="" /></button>

      </Tooltip>   <button className='ml-4' onClick={handleLogout}>LogOut</button> </> : <><Link to="/logIn"><button>LogIn</button></Link> <Link to="/register"> <button className='ml-4'>Register</button></Link> </> 
    }
    
    <button onClick={toggleTheam} className='btn p-1 ml-2 bg-slate-400'>Toggle</button>
    <div className="form-control">
  
</div>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;