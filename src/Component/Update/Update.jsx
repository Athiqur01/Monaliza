import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Update = () => {

    const {updateId, setUpdateId}=useContext(AuthContext)


    const item=useLoaderData()
    setUpdateId(item._id)
    console.log(item)
    const {_id,itemName,imageUrl,subcatagory,itemDescription,price,rating,customization,processingTime,stockStatus,email,userName}=item


    return (
        <div className='flex flex-col justify-center items-center  rounded-lg bg-[#fff7f7] p-20' >
        <div className='bg-[#f4e8e8] rounded-lg px-10 py-6'>
            <form  >
                   {/* inpt first row */}
         <div className=' p-4 flex space-x-8 justify-center'>
           <label className="form-control w-full max-w-xs">
            <div className="label">
             <span className="label-text text-base font-bold">Item Name</span>
            </div>
            <input type="text" defaultValue={itemName} name='name' placeholder="Item Name" className="input input-bordered w-full max-w-xs" />
           </label>

           <label className="form-control w-full max-w-xs">
            <div className="label">
             <span className="label-text text-base font-bold">Image</span>
            </div>
            <input type="text" defaultValue={imageUrl} name='image' placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
           </label>

          </div>
          {/* inpt 2nd  row */}
         <div className=' p-4 flex space-x-8 justify-center'>
           <label className="form-control w-full max-w-xs">
            <div className="label">
             <span className="label-text  text-base font-bold">Subcatagory Name</span>
            </div>

            <input type="text" defaultValue={subcatagory} name='subcatagory' placeholder="Subcatagory" className="input input-bordered w-full max-w-2xl" />
            
           </label>

           <label className="form-control w-full max-w-xs">
            <div className="label">
             <span className="label-text text-base font-bold">Item Description</span>
            </div>
            <input type="text" defaultValue={itemDescription} name='description' placeholder="Item Description" className="input input-bordered w-full max-w-2xl" />
           </label>

          </div>
          {/* inpt 3rd  row */}
         <div className=' p-4 flex space-x-8 justify-center'>
           <label className="form-control w-full max-w-xs">
            <div className="label">
             <span className="label-text text-base font-bold">Price</span>
            </div>
            <input type="text" defaultValue={price} name='price' placeholder="Price" className="input input-bordered w-full max-w-xs" />
           </label>

           <label className="form-control w-full max-w-xs">
            <div className="label">
             <span className="label-text text-base font-bold">Rating</span>
            </div>
            <input type="text" defaultValue={rating} name='rating' placeholder="Rating" className="input input-bordered w-full max-w-2xl" />
           </label>

          </div>

          {/* inpt 4rth  row */}
         <div className=' p-4 flex space-x-8 justify-center'>
           <label className="form-control w-full max-w-xs">
            <div className="label">
             <span className="label-text text-base font-bold">Customization</span>
            </div>
            <input type="text" defaultValue={customization} name='customization' placeholder="Customization" className="input input-bordered w-full max-w-2xl" />
           </label>

           <label className="form-control w-full max-w-xs">
            <div className="label">
             <span className="label-text text-base font-bold">Processing Time</span>
            </div>
            <input type="text" defaultValue={processingTime} name='processing' placeholder="Processing Time" className="input input-bordered w-full max-w-2xl" />
           </label>

          </div>

          {/* inpt 5th  row */}
         <div className=' p-4 flex space-x-8 justify-center'>
           <label className="form-control w-full max-w-xs">
            <div className="label">
             <span className="label-text  text-base font-bold">Stock Status</span>
            </div>
            <input type="text" defaultValue={stockStatus} name='stock' placeholder="Stock Status" className="input input-bordered w-full max-w-xs" />
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
            <input type="text" defaultValue={userName} name='user' placeholder="User Name" className="input input-bordered w-full max-w-xs" />
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

export default Update;