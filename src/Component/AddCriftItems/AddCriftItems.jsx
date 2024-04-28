import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const AddCriftItems = () => {

    const {email}=useContext(AuthContext)


                     const handleForm=e=>{
                        e.preventDefault()
                        const common=e.target;
                        const itemName=common.name.value;
                        
                        const imageUrl=common.image.value;
                        const subcatagory=common.subcatagory.value;
                        const itemDescription=common.description.value;
                        const price=common.price.value;
                        const rating=common.rating.value;
                        const customization=common.customization.value;
                        const processingTime=common.processing.value;
                        const stockStatus=common.stock.value;
                        // const email=common.email.value;
                        const userName=common.user.value;

                        const newItems={itemName,imageUrl,subcatagory,itemDescription,price,rating,customization,processingTime,stockStatus,email,userName}
                        console.log(newItems)


                        fetch('http://localhost:5018/items',{
                            method:'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body:JSON.stringify(newItems)
                        })
                        .then(res=>res.json())
                        .then(data=>{
                            console.log(data)
                            if(data.insertedId){
                                Swal.fire({
                                    title: 'Successful!',
                                    text: 'Data has been inserted',
                                    icon: 'success',
                                    confirmButtonText: 'Close'
                                  })
                                  
                            }
                        })

                     }



    return (
        <div className='flex flex-col justify-center items-center mt-10 rounded-lg bg-[#fff7f7] p-20' >
            <div className='bg-[#f4e8e8] rounded-lg px-10 py-6'>
                <form onSubmit={handleForm} >
                       {/* inpt first row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Item Name</span>
                </div>
                <input type="text" name='name' placeholder="Item Name" className="input input-bordered w-full max-w-xs" />
               </label>

               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Image</span>
                </div>
                <input type="text" name='image' placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
               </label>

              </div>
              {/* inpt 2nd  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Subcatagory Name</span>
                </div>
                <input type="text" name='subcatagory' placeholder="Subcatagory Name" className="input input-bordered w-full max-w-xs" />
               </label>

               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Item Description</span>
                </div>
                <input type="text" name='description' placeholder="Item Description" className="input input-bordered w-full max-w-2xl" />
               </label>

              </div>
              {/* inpt 3rd  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Price</span>
                </div>
                <input type="text" name='price' placeholder="Price" className="input input-bordered w-full max-w-xs" />
               </label>

               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Rating</span>
                </div>
                <input type="text" name='rating' placeholder="Rating" className="input input-bordered w-full max-w-2xl" />
               </label>

              </div>

              {/* inpt 4rth  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Customization</span>
                </div>
                <input type="text" name='customization' placeholder="Customization?" className="input input-bordered w-full max-w-xs" />
               </label>

               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Processing Time</span>
                </div>
                <input type="text" name='processing' placeholder="Processing Time" className="input input-bordered w-full max-w-2xl" />
               </label>

              </div>

              {/* inpt 5th  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Stock Status</span>
                </div>
                <input type="text" name='stock' placeholder="Stock Status" className="input input-bordered w-full max-w-xs" />
               </label>

               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">Email</span>
                </div>
                <input type="email" name='email' placeholder="Email" value={email} className="input input-bordered w-full max-w-2xl" />
               </label>

              </div>

              {/* inpt 6th  row */}
             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <div className="label">
                 <span className="label-text text-base font-bold">User Name</span>
                </div>
                <input type="text" name='user' placeholder="User Name" className="input input-bordered w-full max-w-xs" />
               </label>
              </div>


             <div className=' p-4 flex space-x-8 justify-center'>
               <label className="form-control w-full max-w-xs">
                <input type="submit"  placeholder="Add" className="btn btn-block bg-[#90c9ce]" />
               </label>
              </div>


              {/* last row end */}

                </form>
              


            </div>

           

            

        </div>
    );
};

export default AddCriftItems;