import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../contexts/CartContext";
import { TbArrowBackUp } from "react-icons/tb";
import Loader from "../../components/modals/Loader/loader"; 

const AboutUs = () => {
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
        
        <button
          className="absolute left-4 flex top-4 md:hidden text-black mr-4 text-3xl"
          onClick={() => window.history.back()}
        >
          <TbArrowBackUp />
        </button>
      </div>

      <div className="max-w-5xl mx-auto mt-24 p-6 bg-gray-100 rounded-lg text-center font-sora">
        {/* About Us Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Door2fy</h1>

        {/* Who We Are Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Who We Are</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Door2fy is your one-stop destination for tech support, device upgrades,
            and repair services — all at the convenience of your doorstep. Whether your
            laptop is acting up, your Wi-Fi isn't connecting, or you need a quick hardware upgrade,
            we've got your back with fast, reliable, and affordable service.
          </p>
          <p className="mt-4 font-semibold">
            <span>Our Vision:</span> To simplify tech support for everyone and ensure your devices run smoothly, always.
          </p>
        </section>

        {/* Statistics Section */}
        <section className="flex justify-center gap-6 mb-6">
          {[
            { number: "5,000+", text: "Issues Resolved" },
            { number: "10,000+", text: "Happy Users" },
            { number: "40+", text: "Cities Served" },
            { number: "30 min", text: "Avg. Response Time" },
          ].map((stat, index) => (
            <div key={index} className="bg-white w-40 py-4 text-center">
              <h3 className="text-2xl font-bold text-black">{stat.number}</h3>
              <p className="text-gray-600">{stat.text}</p>
            </div>
          ))}
        </section>

        {/* How We Do It Section */}
        <section className="bg-white p-6 mb-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">How We Do It</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Door2fy, we connect certified tech experts with customers through our platform.
            Whether it’s a minor glitch or a major repair, we assign the right expert near you
            for on-site or remote support. With seamless booking, transparent pricing, and top-rated professionals,
            we ensure peace of mind at every step.
          </p>
        </section>

        {/* Leadership Team Section */}
        {/* <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Our Leadership Team</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                name: "Ayaan Rahman",
                role: "CEO & Founder",
                desc: "Leads product and customer experience. Loves solving real-world problems through tech innovation.",
              },
              {
                name: "Fatima Shaikh",
                role: "CTO",
                desc: "Heads technology and platform scalability. Passionate about automation, DevOps, and impact-driven design.",
              },
              {
                name: "Rohan Mehta",
                role: "Head of Operations",
                desc: "Optimizes service delivery and ensures fast, reliable support across regions.",
              },
            ].map((leader, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md w-80 text-center"
              >
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800">{leader.name}</h3>
                <p className="text-gray-600 font-medium">{leader.role}</p>
                <p className="text-gray-500 text-sm mt-2">{leader.desc}</p>
                <div className="mt-4 flex justify-center space-x-4 text-blue-500 text-xl">
                  <i className="fab fa-linkedin cursor-pointer"></i>
                  <i className="fab fa-twitter cursor-pointer"></i>
                </div>
              </div>
            ))}
          </div>
        </section> */}
      </div>

      <Footer />
      </>
      )}
    </>
  );
};

export default AboutUs;
