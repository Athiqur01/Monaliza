
import { Link } from "react-router-dom";
const Item = ({item}) => {

    const {_id,itemName,imageUrl,subcatagory,itemDescription,price,rating,customization,processingTime,stockStatus,email,userName}=item


    return (
      <div>
         <div className="card w-full h-[750px] md:h-[700px]  lg:h-[720px] bg-base-100 shadow-xl">
           <figure><img src={imageUrl} alt="Shoes" /></figure>
         <div className="card-body text-justify">
           <h2 className="card-title">{itemName}</h2>
           <h4 className="opacity-85"> <span className="font-bold">Subcatagory:</span> {subcatagory}</h4>
           <p className="opacity-85"> <span className="font-bold text-justify">Description:</span> {itemDescription}</p>
           <p className="opacity-85"> <span className="font-bold">Price:</span> {price}</p>
           <p className="opacity-85"> <span className="font-bold">Rating:</span> {rating}</p>
           
           <div className="card-actions justify-end">
           <Link to={`/viewDetail/${_id}`}> <button className="btn  bg-[#90c9ce]">View Detail</button>
           </Link>
           </div>
          </div>
        </div>
     </div>
    );
};

export default Item;