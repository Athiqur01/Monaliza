import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Root = () => {
     const {theam,theamId,loading}=useContext(AuthContext)
    // console.log(theamId)


    return (
        <div  >
            <Navbar></Navbar>
            <div>
                {loading && <span className="loading loading-spinner loading-lg"></span>}
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;