// src/pages/ComingSoonPage.js

import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../contexts/CartContext";
import { TbArrowBackUp } from "react-icons/tb";

const ComingSoonPage = () => {
     const { cartItems } = useCart();
      const [isCartOpen, setIsCartOpen] = useState(false);
    
      const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
      };
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
     <Navbar toggleCart={toggleCart} cartItemCount={cartItems.length} />
     <div className="flex items-center justify-center my-10">
             <img src="/assets/images/icons1.png" alt="" />
             <button
               className="absolute left-4 flex top-4 md:hidden text-black mr-4 text-3xl"
               onClick={() => window.history.back()}
             >
               <TbArrowBackUp />
             </button>
           </div>
     <div className="flex items-center justify-center md:min-h-screen mb-4 font-sora ">
      <div className="text-center">
        <img
          src="/assets/images/comingsoonbanner.png"
          alt="Coming Soon"
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Coming Soon!</h1>
        <p className="text-lg text-gray-600">We're working hard to bring something awesome. Stay tuned!</p>
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default ComingSoonPage;
