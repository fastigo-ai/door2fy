import React, { useState, useEffect } from "react";
import Navbar from "../components/Navigation/Navbar";
import Search from "../components/Search/Search";
import Location from "../components/Location/Location";
import OurService from "../components/Categories/OurService";
import Offers from "../components/Offers/Offers";
import ServiceOptions from "../components/ServiceOptions/ServiceOptions";
import Footer from "../components/Footer/Footer";
import Loader from "../components/modals/Loader/loader"; 

function LandingPage() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const handlePageLoad = () => {
        setLoading(false);
      };
    
      if (document.readyState === "complete") {
        handlePageLoad(); // Page is already loaded
      } else {
        window.addEventListener("load", handlePageLoad);
      }
    
      return () => window.removeEventListener("load", handlePageLoad);
    }, []);

  return (
    <div>
      <Loader loading={loading} />
      {!loading && (
        <>
      {/* <div className="block md:hidden">Mobile View</div> */}
      {/* Navigation Bar */}
      <div className="landing-page-navbar">
        <Navbar cartItemCount={cartItems.length} />
      </div>
      {/* Location Component */}
      <Location className="flex md:hidden" />
      {/* Door2fy Logo */}
      <div className="absolute -top-6 right-2 z-10 block md:hidden">
        <img
          src="/assets/images/Logo-removebg-preview.png"
          alt="Door2fy Logo"
          className="w-32 "
        />
      </div>
      {/* Banner Section */}
      <div className="relative landing-page-banner">
        <div className="block md:hidden">
          <img
            src="/assets/images/LandingPageBanner.jpg"
            alt="Landing Page Banner"
            className="w-full  object-cover "
          />
        </div>
        <div className="md:flex hidden h-screen ">
            <img
              src="/assets/images/DesktopView/Landing-Page-Banner-Desktop.png"
              alt="Landing Page Banner"
              className="w-full
                 rounded-b-[10rem] xl:mt-0 object-cover"
              
            />
           
          
        </div>
      </div>
      <div className="landing-page-search">
        <Search />
      </div>
      <div className="landing-page-ourService">
        <OurService />
      </div>
      <div className="landing-page-offers bg-cyan-700 ">
        <Offers />
      </div>

      <div className="landing-page-serviceOptions">
        <ServiceOptions />
      </div>

      <div className="landing-page-service-banner m-4 flex justify-center ">
        <img src="/assets/images/mobilebanner.png" alt="" className="md:w-2/3" />
      </div>
      
      <Footer />
      </>
      )}
    </div>
  );
}

export default LandingPage;
