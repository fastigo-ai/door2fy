import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../contexts/CartContext";
import { TbArrowBackUp } from "react-icons/tb";

const ContactUs = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    issue: "",
    subIssue: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async() => {
    try {
        const response = await fetch("https://formspree.io/f/movvpewj", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          alert("Order submitted successfully!");
          navigate("/");
        }
      } catch (error) {
        alert("Failed to submit order. Please try again.");
      }
  };

  return (
    <div>
      {/* Navbar with Cart Toggle */}
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

      {/* Contact Us Form Container */}
      <div className="max-w-3xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          How Can We Help Today?
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Fill out the form below to address your concerns.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input Fields */}
          {[
            {
              label: "Full Name",
              name: "fullName",
              type: "text",
              required: true,
            },
            {
              label: "Email Address",
              name: "email",
              type: "email",
              required: true,
            },
            {
              label: "Contact Number",
              name: "contactNumber",
              type: "tel",
              required: true,
            },
            { label: "Issue", name: "issue", type: "text", required: true },
            {
              label: "Sub-Issue",
              name: "subIssue",
              type: "text",
              required: true,
            },
          ].map(({ label, name, type, required }) => (
            <div key={name} className="text-left">
              <label className="font-semibold block mb-1 text-gray-700">
                {label} {required && "*"}
              </label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required={required}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          ))}

          {/* Comments Section */}
          <div className="text-left">
            <label className="font-semibold block mb-1 text-gray-700">
              Your Comments (Optional)
            </label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300"
          >
            Submit Details
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
