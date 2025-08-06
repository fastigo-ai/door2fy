import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../contexts/CartContext";
import { TbArrowBackUp } from "react-icons/tb";
import Loader from "../../components/modals/Loader/loader";

const ContactUs = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

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

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    issue: "",
    subIssue: "",
    comments: "",
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errors.email = "Invalid email address.";
    }
    if (!formData.contactNumber.trim()) {
      errors.contactNumber = "Contact Number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.contactNumber)) {
      errors.contactNumber = "Enter a valid 10-digit number.";
    }
    if (!formData.issue.trim()) errors.issue = "Issue is required.";
    if (!formData.subIssue.trim()) errors.subIssue = "Sub-Issue is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("https://formspree.io/f/mkgrnwwn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.contactNumber,
          issue: formData.issue,
          subIssue: formData.subIssue,
          comments: formData.comments,
        }),
      });

      if (response.ok) {
        alert("Ticket submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          contactNumber: "",
          issue: "",
          subIssue: "",
          comments: "",
        });
        navigate("/");
      } else {
        const errorData = await response.json();
        alert(`Failed to submit ticket: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      alert("Failed to submit ticket. Please try again.");
    }
  };

  return (
    <div>
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
            {
              label: "Issue",
              name: "issue",
              type: "text",
              required: true,
            },
            {
              label: "Sub-Issue",
              name: "subIssue",
              type: "text",
              required: true,
            },
          ].map(({ label, name, type }) => (
            <div key={name} className="text-left">
              <label className="font-semibold block mb-1 text-gray-700">
                {label} *
              </label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  formErrors[name] ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-2 focus:outline-none ${
                  formErrors[name] ? "focus:ring-red-400" : "focus:ring-blue-500"
                }`}
              />
              {formErrors[name] && (
                <p className="text-red-500 text-sm mt-1">{formErrors[name]}</p>
              )}
            </div>
          ))}

          {/* Comments */}
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-all duration-300"
          >
            Submit Details
          </button>
        </form>
      </div>
      
      <Footer />
      </>
      )}
    </div>
  );
};

export default ContactUs;
