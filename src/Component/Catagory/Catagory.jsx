import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const Catagory = () => {
    
    const {subcatagory, setSubcatagory}=useContext(AuthContext)

    const handleSubcatagory=(subcatagoryName)=>{
        console.log(subcatagoryName)
        setSubcatagory(subcatagoryName)
    }

    return (
        <div className="border-t-2 rounded-3xl border-red-100 pt-6 pb-16 bg-[#fff7f7] px-10 mt-10">
            <h1 className="text-3xl  lg:text-6xl font-bold py-6 ">Arts and Craft Catagory</h1>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4  ">


                
                {/* Landscape */}

                

                <Link to="/subcatagory">

                <div onClick={()=>handleSubcatagory('Landscape Painting')} className="card card-compact  bg-base-100 shadow-xl">
                 <figure><img src="https://i.ibb.co/4jJ3Pwk/land.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title justify-center ">Landscape Painting</h2>
                
                <div className="card-actions justify-center">
                <button className="p-2 bg-[#90c9ce] text-black">Explore Now</button>
               </div>
               </div>
              </div>


                </Link>

              

                {/* Portrait Drawing */}

                <Link to="/subcatagory">
                <div onClick={()=>handleSubcatagory('Portrait Drawing')} className="card card-compact  bg-base-100 shadow-xl">
                 <figure><img src="https://i.ibb.co/68nDq7z/potrate.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title justify-center ">Portrait Drawing</h2>
                
                <div className="card-actions justify-center">
                <button className="p-2 bg-[#90c9ce] text-black">Explore Now</button>
               </div>
               </div>
              </div>
                    
                </Link>

              
                {/* Watercolour Painting */}

                <Link to="/subcatagory">

                <div onClick={()=>handleSubcatagory('Watercolour Painting')} className="card card-compact  bg-base-100 shadow-xl">
                 <figure><img src="https://i.ibb.co/r0NrZsZ/water.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title justify-center ">Watercolour Painting</h2>
                
                <div className="card-actions justify-center">
                <button className="p-2 bg-[#90c9ce] text-black">Explore Now</button>
               </div>
               </div>
              </div>

                </Link>

              
                {/* Oil Painting */}

                <Link to="/subcatagory">

                <div onClick={()=>handleSubcatagory('Oil Painting')}  className="card card-compact  bg-base-100 shadow-xl">
                 <figure><img src="https://i.ibb.co/b3CPyvP/oil.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title justify-center ">Oil Painting</h2>
                
                <div className="card-actions justify-center">
                <button className="p-2 bg-[#90c9ce] text-black">Explore Now</button>
               </div>
               </div>
              </div>

                </Link>

              
                {/* Charcoal Sketching: */}

                <Link to="/subcatagory">

                <div onClick={()=>handleSubcatagory('Charcoal Sketching')} className="card card-compact  bg-base-100 shadow-xl">
                 <figure><img src="https://i.ibb.co/RzZbWPf/charkol.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title justify-center ">Charcoal Sketching</h2>
                
                <div className="card-actions justify-center">
                <button className="p-2 bg-[#90c9ce] text-black">Explore Now</button>
               </div>
               </div>
              </div>

                </Link>

              

                {/* Cartoon Drawing */}

                <Link to="/subcatagory">
                <div onClick={()=>handleSubcatagory('Cartoon Drawing')} className="card card-compact  bg-base-100 shadow-xl">
                 <figure><img src="https://i.ibb.co/ctfpnJN/hero.png" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title justify-center ">Cartoon Drawing</h2>
                
                <div className="card-actions justify-center">
                <button className="p-2 bg-[#90c9ce] text-black">Explore Now</button>
               </div>
               </div>
              </div>

                </Link>

              


            


            
        </div>
        </div>
    );
};

export default Catagory;