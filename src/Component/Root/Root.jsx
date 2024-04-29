import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Root = () => {
     const {theam,theamId}=useContext(AuthContext)
    // console.log(theamId)


    return (
        <div  >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;