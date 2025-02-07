import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../contexts/CartContext";
import { TbArrowBackUp } from "react-icons/tb";

const TermsOfUse = () => {
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


      <div className="max-w-5xl mx-auto mt-24 p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Terms of Use
        </h1>

        {/* Section: Definitions */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b-2 border-black pb-2 mb-4">
            DEFINITIONS
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed">
            Welcome to www.Door2fy.com website (the "Site") operated by Fastigo
            Technology Pvt Ltd (“Door2fy”). Door2fy provides its services to you
            subject to the following conditions. Before you may use the Site,
            you must read and accept all of the terms and conditions in, and
            linked to, this Terms of Use ("ToU") and the linked Privacy Policy.
          </p>
        </section>

        {/* Section: Description of Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b-2 border-black pb-2 mb-4">
            DESCRIPTION OF SERVICES
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed">
            In the Site, Door2fy provides users with access to information
            primarily about Business Support Services for Electronic goods
            including, but not restricted to, Warranties and related services.
            You are responsible for obtaining access to the Site, and that
            access may involve third-party fees. By using this site and
            furnishing your personal/contact details, you hereby agree that you
            are interested in availing and purchasing the services that you have
            selected.
          </p>
        </section>

        {/* Section: License and Site Access */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b-2 border-black pb-2 mb-4">
            LICENSE AND SITE ACCESS
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed">
            Door2fy grants you a limited license to access and make personal use
            of the Site and the Service. You may not bypass any measures used by
            Door2fy to prevent or restrict access to the Site. Unauthorized use
            by you shall terminate the permission or license granted to you by
            Door2fy.
          </p>
        </section>

        {/* Section: Eligibility */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b-2 border-black pb-2 mb-4 ">
            ELIGIBILITY
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed">
            The Service is not available to minors under the age of 18 or to any
            users suspended or removed from the system by Door2fy for any
            reason. Users may not have more than one active account. If you do
            not qualify, you may not use the Service or the Site.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default TermsOfUse;
