import { FaStar } from "react-icons/fa";


const CustomerReview = () => {
    return (
        <div className="px-10 py-14 mt-16 bg-[#fff7f7] rounded-md">

<h2 className="text-3xl lg:text-5xl font-bold pb-10">Customer Review</h2>

<div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">

<div className="card  bg-base-100 shadow-xl">
<div className="w-20 h-20 rounded-md ">
<img className=" rounded-lg" src="https://i.ibb.co/CWGN2R9/close-up-photo-young-successful-business-man-black-suit.jpg" alt="Shoes" />
</div>
<div className="card-body text-left">
<h2 className="card-title">Steven Smith</h2>
<p>
"Monaliza excels with top-notch service, innovative solutions, and unwavering dedication to customer satisfaction. A leader in its industry, setting the bar high for quality and excellence."</p>
<div className=" flex  items-center">Rating: 
<span className="pl-2"><FaStar /></span>
<span className="pl-2"><FaStar /></span>
<span className="pl-2"><FaStar /></span>
<span className="pl-2"><FaStar /></span>
<span className="pl-2"><FaStar /></span>
</div>

</div>
</div>

<div className="card  bg-base-100 shadow-xl">
<div className="w-20 h-20 rounded-md ">
<img className=" rounded-lg" src="https://i.ibb.co/kBSNNnN/business-concept-smiling-thoughtful-handsome-man-standing-white-isolated-background-touching-his-chi.jpg" alt="Shoes" />
</div>
<div className="card-body text-left">
<h2 className="card-title">Willium jordan</h2>
<p>
"Outstanding Monaliza! Exemplary service, cutting-edge technology, and a customer-centric approach. Continuously surpassing expectations, setting industry benchmarks for excellence and innovation."</p>
<div className=" flex  items-center">Rating: 
<span className="pl-2"><FaStar /></span>
<span className="pl-2"><FaStar /></span>
<span className="pl-2"><FaStar /></span>
<span className="pl-2"><FaStar /></span>
<span className="pl-2"><FaStar /></span>
</div>

</div>
</div>

<div className="card  bg-base-100 shadow-xl">
<div className="w-20 h-20 rounded-md ">
<img className=" rounded-lg" src="https://i.ibb.co/WK6jD2x/elegant-man-with-folded-arms.jpg" alt="Shoes" />
</div>
<div className="card-body text-left">
<h2 className="card-title">Steven Smith</h2>
<p>

"Remarkable Monaliza! From exceptional service to groundbreaking innovations, they redefine excellence. With a customer-first mentality, they set the gold standard in their industry. Truly outstanding."</p>
<div className=" flex  items-center">Rating: 
<span className="pl-2"><FaStar /></span>
<span className="pl-2"><FaStar /></span>
<span className="pl-2"><FaStar /></span>
<span className="pl-2"><FaStar /></span>
<span className="pl-2"><FaStar /></span>
</div>

</div>
</div>

</div>



        </div>
    );
};

export default CustomerReview;