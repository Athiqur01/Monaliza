import { useLoaderData } from "react-router-dom";


const ViewDetail = () => {
    const item=useLoaderData()
    const {_id,itemName,imageUrl,subcatagory,itemDescription,price,rating,customization,processingTime,stockStatus,email,userName}=item
    return (
        <div className="p-4 md:p-16 lg:p-28 bg-red-50  rounded-md">
         <div className="card w-full  bg-base-100 shadow-xl">
           <figure><img src={imageUrl} alt="Shoes " className="w-full " /></figure>
         <div className="card-body text-justify">
           <h2 className="card-title">{itemName}</h2>
           <h4 className="opacity-85"> <span className="font-bold">Subcatagory:</span> {subcatagory}</h4>
           <p className="opacity-85"> <span className="font-bold text-justify">Description:</span> {itemDescription}</p>
           <p className="opacity-85"> <span className="font-bold">Price:</span> {price}</p>
           <p className="opacity-85"> <span className="font-bold">Rating:</span> {rating}</p>
           <p className="opacity-85"> <span className="font-bold">Customization:</span> {customization}</p>
           <p className="opacity-85"> <span className="font-bold">Processing Time:</span> {processingTime}</p>
           <p className="opacity-85"> <span className="font-bold">Stock status:</span> {stockStatus}</p>
           
           <div className="card-actions justify-end">
            <button className="btn  bg-[#90c9ce]">Buy</button>
           
           </div>
          </div>
        </div>
     </div>
    );
};

export default ViewDetail;