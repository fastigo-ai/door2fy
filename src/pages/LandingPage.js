import React,{useState} from 'react';
import Navbar from '../components/Navigation/Navbar';
import Search from '../components/Search/Search';
import Location from '../components/Location/Location';
import OurService from '../components/OurServices/OurService';
import Offers from '../components/Offers/Offers';
import ServiceOptions from '../components/ServiceOptions/ServiceOptions';

import Footer from '../components/Footer/Footer';


function LandingPage() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  
  return (
    <div>
      {/* <div className="block md:hidden">Mobile View</div> */}
      {/* Navigation Bar */}
      <div className="landing-page-navbar">
        <Navbar cartItemCount={cartItems.length}/>
        </div>
      {/* Location Component */}
      <Location />
      {/* Door2fy Logo */}
      <div className="absolute -top-6 right-2 z-10">
        <img
          src="/assets/images/Logo-removebg-preview.png"
          alt="Door2fy Logo"
          className="w-32 "
        />
        </div>
       {/* Banner Section */}
       <div className="relative landing-page-banner">
        <img
          src="/assets/images/LandingPageBanner.jpg"
          alt="Landing Page Banner"
          className="w-full  object-cover"
        />
        
      </div>
      <div className="landing-page-search">
        <Search/>
      </div>
      <div className="landing-page-ourService">
        <OurService/>
      </div>
      <div className='landing-page-offers bg-cyan-700'>
        <Offers/>

      </div>
      
      <div className="landing-page-serviceOptions">
        <ServiceOptions/>
      </div>

      <div className="landing-page-service-banner m-4">
        <img src="/assets/images/mobilebanner.jpg" alt="" srcset="" />
      </div>

      <Footer/>
    </div>
  )
}

export default LandingPage;
