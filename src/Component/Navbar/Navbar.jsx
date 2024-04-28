import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {

    const {logInUser, user, setUser,email,setEmail,logOut}=useContext(AuthContext)

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
    return (
        <div>
              <div className="navbar bg-[#90c9ce] rounded-md px-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className=" text-xl">Monaliza</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user? <button onClick={handleLogout}>LogOut</button>: <Link to="/logIn">LogIn</Link>
    }
    
    
    
  </div>
</div>
            
        </div>
    );
};

export default Navbar;