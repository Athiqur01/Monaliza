import { useLoaderData } from "react-router-dom";
import Item from "../Item/Item";
import Catagory from "../Catagory/Catagory";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Carosal from "../Carosal/Carosal";





const Home = () => {

    const {setUserPhoto,selectedUser}=useContext(AuthContext)

    const items=useLoaderData()

    setUserPhoto(selectedUser?.photoUrl)


    
    
    


    return (
        <div  className="   pb-10" >
            <div>
                <Carosal></Carosal>
            </div>
            <div className="bg-[#fff7f7]  rounded-md p-10">
            <h1 className="text-6xl font-bold">Craft Items</h1>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10   ">
                {items.map(item=><Item key={item._id} item={item}></Item>)}
            </div>

            </div>
            

            <div>
                
                <Catagory></Catagory>
            </div>
            
        </div>
    );
};

export default Home;