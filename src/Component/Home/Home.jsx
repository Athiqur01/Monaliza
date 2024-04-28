import { useLoaderData } from "react-router-dom";
import Item from "../Item/Item";
import Catagory from "../Catagory/Catagory";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Home = () => {

    const {setUserPhoto,selectedUser}=useContext(AuthContext)

    const items=useLoaderData()

    setUserPhoto(selectedUser?.photoUrl)
    


    return (
        <div className="mt-10  bg-[#fff7f7] rounded-md py-10" >
            <h1 className="text-6xl font-bold">Craft Items</h1>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10  p-12">
                {items.map(item=><Item key={item._id} item={item}></Item>)}
            </div>

            <div>
                
                <Catagory></Catagory>
            </div>
            
        </div>
    );
};

export default Home;