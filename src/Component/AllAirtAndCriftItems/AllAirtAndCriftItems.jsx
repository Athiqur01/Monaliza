
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AllAirtAndCriftItems = () => {

    const items=useLoaderData()
    


    return (
        <div className='bg-[#fff7f7] pt-14 rounded-md'>



<h2 className='text-4xl font-bold'>List of all Art and Craft Items</h2>
<hr className='mx-20 mt-6' />
<div className="overflow-x-auto p-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className='text-center font-bold text-lg'>Item Name</th>
        <th className='text-center font-bold text-lg '>Description</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {items.map((item,index)=><> 
                <tr>
               <th className='p-4'>{index+1}</th>
               <td className='text-justify p-4'>{item.itemName}</td>
               <td className='text-justify p-4'>{item.itemDescription}</td>
               <td className='text-center p-4'><Link to={`/viewDetail/${item._id}`}> <button className="btn  bg-[#90c9ce]">View Detail</button>
           </Link></td>
               </tr>
            </>
            )}
     
    </tbody>
  </table>
</div>






            
           


        </div>
    );
};

export default AllAirtAndCriftItems;