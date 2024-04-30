import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const MyArtAndCraftList = () => {

    const {email,setLoading,updateId}=useContext(AuthContext)

    const items=useLoaderData()

    const filterItems=items.filter(itemsFiltered=>itemsFiltered.email=== email )
    console.log(filterItems)

    const [filterItemsSelected, setFilterItemsSelected]=useState(filterItems)

    const handleCustomYes=()=>{
       const filterYes=filterItems.filter(itemYes=>itemYes.customization==='Yes')
       console.log('filter yes',filterYes)
       setFilterItemsSelected(filterYes)
    }
    const handleCustomNo=()=>{
        const filterNo=filterItems.filter(itemNo=>itemNo.customization==='No')
        setFilterItemsSelected(filterNo)
    }

    const handleDelete=id=>{
        console.log(id)

    const reloadWindow=()=>{
        window.location.reload()
    }    


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            
              
            fetch(`https://monaliza-server.vercel.app/items/${id}`, {
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                        
                      });
                    
                      reloadWindow()
                }
            })
            
            
          });

          


    }
    


    return (

          <div className=' bg-[#fff7f7] rounded-md px-12 py-20'>

<div>
      
      <div className="dropdown dropdown-bottom">
       <div tabIndex={0} role="button" className="btn m-1 text-xl min-w-42 bg-[#90c9ce]">Customization</div>
       <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#90c9ce] rounded-box min-w-44">
       <li onClick={handleCustomYes}><a className='font-semibold'>Yes</a></li>
        <li onClick={handleCustomNo}><a className='font-semibold '>No</a></li>
       </ul>
       </div>

       </div>

             <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 ">

             


                {

                   filterItemsSelected.map(item=><>



                   <div className="card w-full h-[750px] md:h-[700px]  lg:h-[700px] bg-base-100 shadow-xl">
                   <figure><img  src={item.imageUrl} alt="Shoes" /></figure>
                   <div className="card-body text-justify">
                    <h2 className="card-title">{item.itemName}</h2>
                     <h4 className="opacity-85"> <span className="font-bold">Subcatagory:</span> {item.subcatagory}</h4>
                      <p className="opacity-85"> <span className="font-bold text-justify">Description:</span> {item.itemDescription}</p>
                       <p className="opacity-85"> <span className="font-bold">Price:</span> {item.price}</p>
                       <p className="opacity-85"> <span className="font-bold">Rating:</span> {item.rating}</p>
                       <p className="opacity-85"> <span className="font-bold">Customization:</span> {item.customization}</p>
                        <p className="opacity-85"> <span className="font-bold">Stock Status:</span> {item.stockStatus}</p>

                        <div className="card-actions flex justify-between">
                            <Link to={`/update/${item._id}`}><button className="btn  bg-[#90c9ce]">Update</button></Link>
                         <Link to="/MyArtAndCraftList"><button onClick={()=>handleDelete(item._id)} className="btn  bg-[#fbec9f]">Delete</button></Link>
                         

                        </div>
                        </div>
                          </div>

  
  
                          </>)

                          }









                        </div>



                       </div>

        
        
    );
};

export default MyArtAndCraftList;