import React from 'react';
import { FaStar } from 'react-icons/fa';

const FeaturedItems = () => {
    return (
        <div className="px-10 py-14 mt-16 bg-[#fff7f7] rounded-md">

        <h2 className="text-3xl lg:text-5xl font-bold pb-10">Featured Items</h2>
        
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        
        <div className="card  bg-base-100 shadow-xl">
        <div className=" rounded-md ">
        <img className=" rounded-lg" src="https://i.ibb.co/7zGnRj6/painting-mountain-lake-with-mountain-background.jpg" alt="Shoes" />
        </div>
        <div className="card-body text-left">
        <h2 className="card-title">Forest Gump</h2>
        <p className='text-justify'>
        "Forest Gump" captures the serene ambiance of a forest at twilight, where shadows mingle with light, hinting at hidden wonders and inviting quiet contemplation.</p>
        <div className=" flex  items-center">Rating: 
        <span className="pl-2"><FaStar /></span>
        <span className="pl-2"><FaStar /></span>
        <span className="pl-2"><FaStar /></span>
        <span className="pl-2"><FaStar /></span>
        <span className="pl-2"><FaStar /></span>
        </div>
        
        </div>
        <div className='bg-[#90c9ce] rounded-md py-2'><button>View Detail</button></div>
        </div>


        
        <div className="card  bg-base-100 shadow-xl">
        <div className=" rounded-md ">
        <img className=" rounded-lg" src="https://i.ibb.co/4Yw4jF9/majestic-mountain-range-reflects-tranquil-beauty-nature-generated-by-ai.jpg" alt="Shoes" />
        </div>
        <div className="card-body text-left">
        <h2 className="card-title">Hill View</h2>
        <p className='text-justify'>
        "Hill View offers breathtaking vistas, serene ambiance, and lush landscapes. Perfect for nature lovers seeking tranquility and picturesque surroundings amidst the rolling hills."</p>
        <div className=" flex  items-center">Rating: 
        <span className="pl-2"><FaStar /></span>
        <span className="pl-2"><FaStar /></span>
        <span className="pl-2"><FaStar /></span>
        <span className="pl-2"><FaStar /></span>
        <span className="pl-2"><FaStar /></span>
        </div>
        
        </div>
        <div className='bg-[#90c9ce] rounded-md py-2'><button>View Detail</button></div>
        </div>


        
        <div className="card  bg-base-100 shadow-xl">
        <div className=" rounded-md ">
        <img className=" rounded-lg" src="https://i.ibb.co/pR6dNb9/mountain-landscape-with-hot-air-balloon-dawn-generative-ai.jpg" alt="Shoes" />
        </div>
        <div className="card-body text-left">
        <h2 className="card-title">Mountain Beauty</h2>
        <p className='text-justify'>
        "Mountain Beauty captivates with its majestic peaks, pristine lakes, and lush forests. A paradise for adventurers and nature enthusiasts, offering awe-inspiring vistas and unforgettable experiences."</p>
        <div className=" flex  items-center">Rating: 
        <span className="pl-2"><FaStar /></span>
        <span className="pl-2"><FaStar /></span>
        <span className="pl-2"><FaStar /></span>
        <span className="pl-2"><FaStar /></span>
        <span className="pl-2"><FaStar /></span>
        </div>
        
        </div>
        <div className='bg-[#90c9ce] rounded-md py-2'><button>View Detail</button></div>
        </div>
        
        </div>
        
        
        
                </div>
    );
};

export default FeaturedItems;