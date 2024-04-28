import { FaFacebook,FaLinkedin,FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="   ">
        <footer className="footer text-black  px-10 mx-auto bg-[#90c9ce] text-base-content pt-20 flex flex-col md:flex-row ">
  <nav className="text-white mx-auto text-black">
    <h6 className="footer-title text-black">Monaliza</h6> 
    <p className="text-left text-black">Explore the mystique of the <br /> MonaLiza at our gallery, where <br />every detail invites fascination <br /> and interpretation.</p>
    
  </nav> 
  <nav className="text-white mx-auto">
    <h6 className="footer-title text-black">Contact</h6> 
    <p className="text-left text-black">700 WE 15th Int Miami, FLR B379 <br />Call us FREE<a className="link link-hover text-left" href="">+1 (800) 990 6688</a>  <br />
<a className="link link-hover" >monaliza@gmail.com</a>
</p>
  </nav> 
  <nav className="text-white mx-auto ">
    <h6 className="footer-title text-black">Social Links</h6> 
    <div className="flex space-x-4 text-2xl">
    <a className="link link-hover text-black"><FaFacebook /></a>
    <a className="link link-hover text-black"><FaLinkedin /></a>
    <a className="link link-hover text-black"><FaTwitter /></a>

    </div>
    
  </nav> 
  
  
</footer>
  <div className="bg-[#90c9ce] text-center ">
    <p className="text-black p-20">© 2018 Qode Interactive, All Rights Reserved</p>
  </div>
        </div>
    );
};

export default Footer;