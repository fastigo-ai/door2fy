import React, { useState , useEffect} from "react";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../contexts/CartContext";
import { TbArrowBackUp } from "react-icons/tb";


const AboutUs = () => {
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
      

      <div className="max-w-5xl mx-auto mt-24 p-6 bg-gray-100 rounded-lg text-center font-sora">
        {/* About Us Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>

        {/* Who We Are Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Who We Are</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Urban Company is a technology platform offering a variety of home services such as beauty treatments, haircuts, 
            massage therapy, cleaning, plumbing, carpentry, appliance repair, painting, and more. We promise a high-quality, 
            standardized, and reliable service experience by working closely with our skilled professionals.
          </p>
          <p className="mt-4 font-semibold">
            <span >Our Vision:</span> Empower professionals worldwide to deliver exceptional home services.
          </p>
        
        {/* Statistics Section */}
        <section className="flex justify-center gap-6 mb-6">
          {[
            { number: "45,000+", text: "Trained Professionals" },
            { number: "10 Million+", text: "Happy Customers" },
            { number: "231", text: "Cities" },
            { number: "4", text: "Countries" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white w-40 py-4 text-center"
            >
              <h3 className="text-2xl font-bold text-black">{stat.number}</h3>
              <p className="text-gray-600">{stat.text}</p>
            </div>
          ))}
        </section>

        {/* How We Do It Section */}
        <section className="bg-white p-6  mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">How We Do It</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Urban Company provides a platform for skilled professionals to connect with users looking for home services. 
            Our smart matchmaking algorithm ensures that users are paired with the best professionals based on their requirements 
            and availability.
          </p>
        </section>

        </section>


        {/* Leadership Team Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Our Leadership Team</h2>
          <div className="flex justify-center gap-6">
            {[
              { name: "Abhiraj Bhal", role: "CEO & Co-founder", desc: "Abhiraj leads marketing and product growth at Urban Company. He enjoys running marathons, skydiving, and cooking." },
              { name: "Second Leader", role: "CTO & Co-founder", desc: "Responsible for technology and innovation, he enjoys solving complex problems and building scalable platforms." },
              { name: "Third Leader", role: "CFO", desc: "Handles financial strategies and growth. Passionate about travel and culinary experiences." },
            ].map((leader, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
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
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
