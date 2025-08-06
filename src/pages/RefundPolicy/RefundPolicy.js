import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../contexts/CartContext";
import { TbArrowBackUp } from "react-icons/tb";
import Loader from "../../components/modals/Loader/loader"; 

const RefundPolicy = () => {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

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
    <>
    <Loader loading={loading} />
      {!loading && (
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

      <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-white shadow-lg rounded-lg">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Non-Refundable Policy</h1>
        </header>

        <section className="space-y-8">
          {/* Introduction */}
          <div>
            <h2 className="text-xl text-black font-semibold">Introduction</h2>
            <p className="text-gray-700">
              Thank you for visiting our website. Please be aware that all sales are final, and no refunds will be issued. This Non-Refundable Policy is designed to ensure that our customers are fully informed before making a purchase.
            </p>
          </div>

          {/* Policy Details */}
          <div>
            <h2 className="text-xl text-black font-semibold">Policy Details</h2>
            <p className="text-gray-700">
              By completing a purchase with us, you acknowledge and agree to the following:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>No refunds, exchanges, or credits will be provided under any circumstances.</li>
              <li>All sales are final, and no exceptions will be made.</li>
              <li>We encourage you to carefully review your order before completing your purchase.</li>
            </ul>
          </div>

          {/* Exceptions */}
          <div>
            <h2 className="text-xl text-black font-semibold">Exceptions</h2>
            <p className="text-gray-700">
              There are no exceptions to this policy. Please ensure that you are satisfied with your purchase before finalizing your order.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-xl text-black font-semibold">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions or concerns regarding this policy or your purchase, please feel free to contact us:
            </p>
            <p className="text-gray-700 font-medium">
              Email: <a href="mailto:support@door2fy.com" className="text-cyan-600 hover:underline">support@door2fy.com</a>
            </p>
          </div>
        </section>
      </div>

      <Footer />
      </>
      )}
    </>
  );
};

export default RefundPolicy;
