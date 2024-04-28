import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Subcatagory = () => {

    const items=useLoaderData()
    const {subcatagory}=useContext(AuthContext)
    console.log('new',items)
    console.log('new',subcatagory)

    const selectedItems=items.filter(item=>item.subcatagory==subcatagory)

    console.log(selectedItems)


    return (
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10  p-12">

            {
                selectedItems.map(item=><>

<div className="card w-full h-[750px] md:h-[700px]  lg:h-[720px] bg-base-100 shadow-xl">
           <figure><img src={item.imageUrl} alt="Shoes" /></figure>
         <div className="card-body text-justify">
           <h2 className="card-title">{item.itemName}</h2>
           <h4 className="opacity-85"> <span className="font-bold">Subcatagory:</span> {item.subcatagory}</h4>
           <p className="opacity-85"> <span className="font-bold text-justify">Description:</span> {item.itemDescription}</p>
           <p className="opacity-85"> <span className="font-bold">Price:</span> {item.price}</p>
           <p className="opacity-85"> <span className="font-bold">Rating:</span> {item.rating}</p>
           
           <div className="card-actions justify-end">
           <Link to={`/viewDetail/${item._id}`}> <button className="btn  bg-[#90c9ce]">View Detail</button>
           </Link>
           </div>
          </div>
        </div>
                
                </>)
            }
            

        </div>
    );
};

export default Subcatagory;